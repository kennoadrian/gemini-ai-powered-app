import { GoogleGenerativeAI } from "@google/generative-ai";

export const AVAILABLE_MODELS = [
  "gemini-2.5-pro",
  "gemini-2.5-flash",
  "gemini-2.5-flash-preview-09-2025",
  "gemini-2.5-flash-lite",
  "gemini-2.5-flash-lite-preview-09-2025",
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite",
  "gemini-1.5-pro",
  "gemini-1.5-flash",
] as const;

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