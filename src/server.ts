import dotenv from "dotenv";
import cors from "cors";
import express, { Request, Response, type NextFunction } from "express";
import database from "./database";

dotenv.config();

const server = express();
server.use(express.json());
server.use(express.urlencoded());

const port = process.env.PORT || 3001;

server.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    server.use(cors());
    next();
});

server.post("/request/service", async (req: Request, res: Response) => {
    const { name, email, tell, service, terms_accepted } = req.body;

    const form = {
        name,
        email,
        tell,
        service,
        terms_accepted: !!terms_accepted,
    };

    try {
        const formCreate = await database.request_service.create({
            data: form,
        });
        return res.send(formCreate).status(201);
    } catch (error) {
        console.error(error);
    }
    const data = {
        status_code: 500,
        error: "Erro ao tenta realizar o envio do formulario!",
    };
    return res.send(data).status(500);
});

server.listen(port, () => {
    console.log("Server on!");
});
