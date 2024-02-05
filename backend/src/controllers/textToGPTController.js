import textToGPT from "../utilities/textToGPT";

/**
 * An asynchronous controller function that takes a request and response object as parameters, extracts text from the request body, passes the text to the textToGPT function, and sends the result in the response.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {Promise} A promise that resolves to the result sent in the response
 */
export default async function textToGPTController(req, res) {
    const text = req.body.text;
    const result = await textToGPT(text);
    res.send(result);
}