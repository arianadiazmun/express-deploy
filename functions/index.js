

import {onRequest} from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req,res)=> res.send("It's working!😃"));
logger.info("someone hit my API");

export const api = onRequest({ maxInstances: 10 },app);

