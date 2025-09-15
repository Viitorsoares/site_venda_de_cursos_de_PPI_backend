import express from "express";
import courseRouter from "./Routes/courseRouter.js";

const app = express();

const door = 4000;
const host = "localhost";

app.use(express.json());

app.use('/course', courseRouter);

app.listen(door, host, () => {
    console.log(`Servidor rodando em http://${host}:${door}`);
});

