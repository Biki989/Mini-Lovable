import OpenAI from "openai";

const SYSTEM_PROMPT = `You are an expert React developer. Generate a single React component as the default export.
Use only Tailwind CSS for styling (utility classes). The component must be completely self-contained in a single file.
Return ONLY the raw TypeScript/JSX code. Do NOT include markdown, code fences, backticks, or explanations.
The code must start with import statements or the function/const declaration.
Always export default the main component.
Use modern React patterns (hooks, functional components).
Make the UI visually appealing with good spacing, colors, and typography.
If the user asks for interactive features, implement them with React state (useState, useEffect, etc).
Do NOT import external libraries besides React itself — rely only on Tailwind CSS classes for styling.`;

/**
 * Call the OpenAI API to generate React code from a prompt.
 * Meant to be called from a server-side API route only.
 */
export async function generateReactCode(prompt: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not configured on the server.");
  }

  const openai = new OpenAI({ apiKey });

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: prompt },
    ],
    temperature: 0.7,
    max_tokens: 4096,
  });

  const code = response.choices[0]?.message?.content?.trim();
  if (!code) {
    throw new Error("OpenAI returned an empty response.");
  }

  // Strip markdown code fences if the model accidentally includes them
  return code
    .replace(/^```(?:tsx?|jsx?|javascript|typescript)?\n?/i, "")
    .replace(/\n?```$/i, "")
    .trim();
}
