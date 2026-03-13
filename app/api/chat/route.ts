import { createHash } from "crypto";
import { getGenAi } from "@/lib/ai";
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

    const model = getGenAi().getGenerativeModel({ model: "gemini-2.5-flash" });
    const fullPrompt = buildRagPrompt(userPrompt);
    const result = await model.generateContent(fullPrompt);
    const responseText = result.response.text();

    await setCachedResponse(cacheKey, responseText);

    return Response.json({
      success: true,
      response: responseText,
      cached: false,
    });
  } catch (error) {
    console.error("Error generating content:", error);
    return Response.json(
      { success: false, error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
