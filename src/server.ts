import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();

const server = express();
server.use(express.json());

const port = process.env.PORT || 3001;

server.get("/request/service", (req: Request, res: Response) => {
    const { name, email, tell, service, terms_accepted } = req.body;

    const form = {
        name,
        email,
        tell,
        service,
        terms_accepted,
    };

    res.send(form).status(201);
});

server.listen(port, () => {
    console.log("Server on!");
});
