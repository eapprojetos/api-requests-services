import dotenv from "dotenv";
import express, { Request, Response } from "express";

const server = express();
dotenv.config();

const port = process.env.PORT || 3001;

server.get("/", (req: Request, res: Response) => {
    res.send(200);
});

server.listen(port, () => {
    console.log("Server on!");
});
