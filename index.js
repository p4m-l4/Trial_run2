import * as dotenv from 'dotenv';
import express from 'express';
import { logger } from './logger.js';


const app = express();

dotenv.config();

const { PORT } = process.env || 3004;

app.get("/", (req, res) => {
    logger.log("debug", "Hello, Winston!");
    logger.debug("The is the home '/' route.");
	res.status(200).send("Homepage! Hello world.")
});

app.listen(PORT, () => {
    console.log(`🚩 listening on port 🙌 ${PORT}🙌 🚩`);
});