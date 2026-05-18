import { NextResponse } from "next/server";
import { generateText } from "@/lib/gemini";

// This server route receives a POST from the client and forwards the request to Google's Gemini API.
export async function POST(req: Request) {
  try {
    // Parse the incoming JSON body and extract parameters.
    const { jobTitle, experienceLevel, questionFocus, questionCount } = (await req.json()) as {
      jobTitle?: string;
      experienceLevel?: string;
      questionFocus?: string;
      questionCount?: number;
    };
    const title = (jobTitle || "Customer Success Manager").trim();
    const level = experienceLevel || "Mid Level";
    const focus = questionFocus || "Mixed";
    const count = questionCount || 3;

    // Validate the job title before calling the AI.
    if (!title) {
      return NextResponse.json(
        { error: "Job title is required." },
        { status: 400 }
      );
    }

    // Pull the Gemini key from environment variables on the server.
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Gemini API key is not configured." },
        { status: 500 }
      );
    }

    // Create the prompt that asks the AI to generate the role-specific questions and rubrics.
    const prompt = `You are a professional HR specialist and senior hiring manager.
Generate exactly ${count} highly professional, realistic, and thoughtful interview questions for a ${level} ${title}, focusing on ${focus} scenarios.
For each of the ${count} questions, you MUST provide an ideal response guideline or grading rubric for the interviewer.

CRITICAL FORMATTING INSTRUCTIONS:
1. You MUST generate exactly ${count} distinct question blocks. Do not generate 3 questions if the requested number is ${count}.
2. Separate each question block using '---' on a new line.
3. Do NOT use markdown bold formatting like **Question:** or **Rubric:**. Use the exact plain text labels 'Question:' and 'Rubric:'.
4. Do NOT include any introductions, conclusions, explanations, page headers, or numbering like 'Question 1:'.
5. Make sure the output format is exactly as follows:

Question: [Insert question text here]
Rubric: [Insert 1-2 sentence grading rubric or ideal response guidelines here]
---

Remember: You MUST output exactly ${count} distinct blocks separated by '---'.`;

    // Generate response using Google Gemini API
    const aiText = await generateText(prompt);

    if (!aiText) {
      return NextResponse.json(
        { error: "Gemini returned an unexpected empty response." },
        { status: 500 }
      );
    }

    // Return the AI-generated question text to the browser.
    return NextResponse.json({ questions: aiText.trim() });
  } catch (error) {
    // Catch any unexpected errors and return a friendly message.
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error." },
      { status: 500 }
    );
  }
}
