// ai.service.js
let model; // global model reference

(async () => {
  try {
    // ✅ Wait for the module to load before using it
    const { GoogleGenerativeAI } = await import("@google/genai");

    const genAI = new GoogleGenerativeAI({
      apiKey: process.env.GOOGLE_GEMINI_KEY,
    });

    model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: `you are an code reviewer, who has expertise in development.
      you look for the code and find the problems and suggest the solution to the developer.
      you always try to find the best solution for the developer and also to make the code more efficient and clean.`,
    });

    console.log("✅ Gemini model initialized successfully");
  } catch (err) {
    console.error("❌ Failed to initialize Gemini model:", err);
  }
})();

async function generateContent(prompt) {
  try {
    if (!model) {
      throw new Error("Gemini model is not ready yet. Try again.");
    }
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating content:", error);
    return null;
  }
}

module.exports = { generateContent };
