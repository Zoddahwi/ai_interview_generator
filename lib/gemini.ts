import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

/**
 * Helper function to generate content from Google's Gemini-2.5-Flash model.
 * @param prompt The prompt string to feed to the generative AI model.
 * @returns The response text content from the generative model.
 */
export async function generateText(prompt: string): Promise<string> {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const result = await model.generateContent(prompt);
  return result.response.text();
}
