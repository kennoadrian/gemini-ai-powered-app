import { genAi } from "@/lib/ai";


export async function GET() {
    return Response.json({message: "Chat APi route"});
}

export async function POST(request: Request) {
    const body = await request.json();

    if (!body || !body.prompt) {
        return new Response('Invalid request body', { status: 400 });
    }

    try {
        const model = genAi.getGenerativeModel({model: "gemini-2.5-flash"})
        const prompt = body.prompt;

        const result = await model.generateContent(prompt)
        const responseText = result.response.text();

        return Response.json({ 
            success: true,
            response: responseText 
        });
    } catch (error) {
        console.error("Error generating content:", error);
        return Response.json({ 
            success: false,
            error: "Failed to generate response" 
        }, { status: 500 });
    }
}
    