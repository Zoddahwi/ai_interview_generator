import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

/**
 * Helper function to generate content from Google's Gemini-2.5-Flash model.
 * @param prompt The prompt string to feed to the generative AI model.
 * @returns The response text content from the generative model.
 */
export async function generateText(prompt: string): Promise<string> {
  if (!apiKey) {
    throw new Error("Gemini API Key is not configured. Please define GEMINI_API_KEY or NEXT_PUBLIC_GEMINI_API_KEY in your environment variables.");
  }
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const result = await model.generateContent(prompt);
  return result.response.text();
}
