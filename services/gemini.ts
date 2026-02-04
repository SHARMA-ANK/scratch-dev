import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export const streamChatResponse = async (
  history: { role: string; parts: { text: string }[] }[],
  userMessage: string,
  onChunk: (text: string) => void
): Promise<void> => {
  // Initialize Gemini API with the environment variable as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "You are the AI concierge for 'Scratch Dev', a premium digital agency. Your tone is professional, minimalist, sleek, and helpful. You answer questions about web development, UI/UX design, and branding services. Keep answers concise and elegant, matching the high-end aesthetic of the website.",
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const resultStream = await chat.sendMessageStream({ message: userMessage });

    for await (const chunk of resultStream) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        onChunk(c.text);
      }
    }
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    onChunk("I encountered a slight hiccup while thinking. Please try again.");
  }
};