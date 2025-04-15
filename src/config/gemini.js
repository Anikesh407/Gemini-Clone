import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCH3cbNaY6Fi4hvnpiQc2YA6kzBfCzqNZM" });

async function main(prompt) {
  try {
    console.log("Sending prompt to Gemini:", prompt);
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt
    });
    console.log("Raw response from Gemini:", response);
    console.log("Response text:", response.text);
    return response.text;
  } catch (error) {
    console.error("Error in Gemini API call:", error);
    throw error;
  }
}

export default main;