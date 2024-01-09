import { createWorker } from 'tesseract.js';

export async function extractTextFromImage(imageBuffer) {
    const worker = await createWorker('eng');
    const { data: { text } } = await worker.recognize(imageBuffer);
    await worker.terminate();
    console.log(text);
    return text;
}

export async function extractTextFromPDF(pdf) {

}
