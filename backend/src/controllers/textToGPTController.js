import textToGPT from "../utilities/textToGPT";

export async function textToGPTController(req, res) {
    const text = req.body.text;
    const result = await textToGPT(text);
    res.send(result);
}