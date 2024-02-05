import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
    model: 'gemini-pro'
});

export default async function textToGPT(text) {
    const result = await model.generateContent('Summarize the following file content in under 100 words. Text content of the file is as follows: \n\n ' + text);
    console.log(result.response.text());;
    return result.response.text();
}