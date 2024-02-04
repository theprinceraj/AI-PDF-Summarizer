import { createWorker } from 'tesseract.js';
import fs from 'fs';

export default async function extractTextFromImage(imageBuffer) {
    const worker = await createWorker('eng');
    const { data: { text } } = await worker.recognize(imageBuffer);
    await worker.terminate();
    console.log(text, '\n\n');
    return text;
}