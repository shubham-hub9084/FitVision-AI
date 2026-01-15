import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyBc656LjQhsnGQ591gL14S5aF8AoD6T00o";

const genAI = new GoogleGenerativeAI(API_KEY);

async function listModels() {
    try {
        // For some versions of the SDK, getting the model list might be different,
        // but let's try accessing the model directly or via a manager if available.
        // Actually, the SDK doesn't always expose listModels directly on the main instance easily 
        // without using the direct API URL, but let's see if we can just test a simple generation 
        // with a "known good" fallback like 'gemini-1.0-pro-latest'.

        // Attempting to use a model found in the list
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite-preview-02-05" });
        console.log("Testing model: gemini-2.0-flash-lite-preview-02-05");
        const result = await model.generateContent("Hello?");
        console.log("Success with gemini-2.0-flash-lite-preview-02-05:", result.response.text());
    } catch (error) {
        console.error("Error with gemini-2.0-flash-lite-preview-02-05:", error.message);
    }

    try {
        const model2 = genAI.getGenerativeModel({ model: "gemini-flash-latest" });
        console.log("Testing model: gemini-flash-latest");
        const result2 = await model2.generateContent("Hello");
        console.log("Success with gemini-flash-latest:", result2.response.text());
    } catch (error) {
        console.error("Error with gemini-flash-latest:", error.message);
    }
}

listModels();
