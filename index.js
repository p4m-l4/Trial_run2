import * as dotenv from 'dotenv';
import express from 'express';


const app = express();

dotenv.config();

const { PORT } = process.env || 3004;

app.get("/", (req, res) => {
	res.send("Homepage! Hello world.")
});

app.listen(PORT, () => {
    console.log(`🚩 listening on port 🙌 ${PORT}🙌 🚩`);
});