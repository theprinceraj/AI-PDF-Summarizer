import { extractTextFromImage } from "../utilities/imageToText";

/**
 * This function extracts text from an image and sends it in the response.
 *
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @return {Promise<void>} The extracted text sent in the response
 */
export default async function textExtractionController(req, res) {
    const base64Image = req.body.image;
    const text = await extractTextFromImage(base64Image);
    res.send(text);
}