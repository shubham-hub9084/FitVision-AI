
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyBc656LjQhsnGQ591gL14S5aF8AoD6T00o";
const genAI = new GoogleGenerativeAI(API_KEY);

const modelsToTry = [
    "gemini-1.5-flash",
    "gemini-pro",
    "gemini-1.0-pro",
    "gemini-1.5-pro-latest"
];

async function testModel(modelName) {
    console.log(`\nTesting model: ${modelName}...`);
    try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const prompt = "Hello";
        const result = await model.generateContent(prompt);
        const response = await result.response;
        console.log(`✅ SUCCESS with ${modelName}! Response: ${response.text().substring(0, 50)}...`);
        return true;
    } catch (error) {
        console.log(`❌ FAILED with ${modelName}. Status: ${error.status || error.message}`);
        if (error.status !== 404) {
            // If it's not a 404, it might be important (like 403)
            // console.error(error); 
        }
        return false;
    }
}

async function runTests() {
    console.log("Starting model availability tests...");
    for (const name of modelsToTry) {
        const success = await testModel(name);
        if (success) break;
    }
}

runTests();
