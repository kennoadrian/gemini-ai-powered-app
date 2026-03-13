import { GoogleGenerativeAI } from "@google/generative-ai";

let _genAi: GoogleGenerativeAI | null = null;

export function getGenAi(): GoogleGenerativeAI {
  const apiKey = process.env.GEMINI_API_KEY || "";
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set in environment variables");
  }
  if (!_genAi) {
    _genAi = new GoogleGenerativeAI(apiKey);
  }
  return _genAi;
}