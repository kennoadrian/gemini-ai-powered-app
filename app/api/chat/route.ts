import { createHash } from "crypto";
import { getGenAi, AVAILABLE_MODELS } from "@/lib/ai";
import { RAG_CONTEXT } from "@/lib/rag";
import { getCachedResponse, setCachedResponse } from "@/lib/redis";

const CACHE_KEY_PREFIX = "portfolio:chat:";

function getCacheKey(prompt: string): string {
  const normalized = prompt.trim().toLowerCase();
  const hash = createHash("sha256").update(normalized).digest("hex");
  return `${CACHE_KEY_PREFIX}${hash}`;
}

function buildRagPrompt(userPrompt: string): string {
  return `${RAG_CONTEXT}

Visitor question: ${userPrompt.trim()}

Answer (based only on the knowledge base above):`;
}

async function generateWithModelRotation(fullPrompt: string): Promise<{ text: string; model: string }> {
  const genAi = getGenAi();
  let lastError: unknown;

  for (const modelId of AVAILABLE_MODELS) {
    try {
      const model = genAi.getGenerativeModel({ model: modelId });
      const result = await model.generateContent(fullPrompt);
      const text = result.response.text();
      return { text, model: modelId };
    } catch (err) {
      lastError = err;
      console.warn(`Gemini model ${modelId} failed, trying next:`, err);
    }
  }

  throw lastError ?? new Error("All models failed");
}

export async function GET() {
  return Response.json({ message: "Portfolio AI chat API – POST with { prompt } to ask about Kenno." });
}

export async function POST(request: Request) {
  const body = await request.json();

  if (!body || typeof body.prompt !== "string") {
    return new Response(JSON.stringify({ success: false, error: "Invalid request body" }), { status: 400 });
  }

  const userPrompt = body.prompt.trim();
  if (!userPrompt) {
    return new Response(JSON.stringify({ success: false, error: "Prompt is required" }), { status: 400 });
  }

  const cacheKey = getCacheKey(userPrompt);

  try {
    const cached = await getCachedResponse(cacheKey);
    if (cached) {
      return Response.json({ success: true, response: cached, cached: true });
    }

    const fullPrompt = buildRagPrompt(userPrompt);
    const { text: responseText } = await generateWithModelRotation(fullPrompt);

    await setCachedResponse(cacheKey, responseText);

    return Response.json({
      success: true,
      response: responseText,
      cached: false,
    });
  } catch (error) {
    console.error("Error generating content (all models failed):", error);
    return Response.json(
      { success: false, error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
