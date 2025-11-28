import { GoogleGenAI } from "@google/genai";

// Initialize the client safely checking for process existence
const apiKey = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : '';
const ai = new GoogleGenAI({ apiKey });

export const generateAIResponse = async (
  userPrompt: string,
  systemInstruction: string,
  modelId: string = "gemini-2.5-flash"
): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
      },
    });
    return response.text || "No response generated. Please try again.";
  } catch (error) {
    console.error("AI Generation Error:", error);
    return "Sorry, I encountered an error generating the response. Please check your network or API key.";
  }
};