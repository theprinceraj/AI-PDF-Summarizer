import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

import textExtractRoute from '../src/routes/textExtract';
app.use('/extract', textExtractRoute)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})