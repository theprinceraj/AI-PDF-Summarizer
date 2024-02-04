import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
    model: 'gemini-pro'
});

export default async function textToGPT(text) {
    const result = await model.generateContent('What do you think would be the most suitable folder name for the file containing the following text? Keep in mind that the folder name should be smaller than 2 words. Text Content of the file is as follows: \n\n ' + text);
    console.log(result.response.text());;
}