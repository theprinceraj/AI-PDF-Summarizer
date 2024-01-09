import { extractTextFromImage } from "../utilities/imageToText";

export async function textExtractionController(req, res) {
    const base64Image = req.body.image;
    const text = await extractTextFromImage(base64Image);
    res.send(text);
}