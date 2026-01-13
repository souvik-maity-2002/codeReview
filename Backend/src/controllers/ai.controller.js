// src/services/ai.service.js
import { Client } from '@google/genai';

const client = new Client({ apiKey: process.env.GOOGLE_GEMINI_KEY });

export async function generateContent(prompt) {
  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error('Error generating content:', error);
    return null;
  }
}
