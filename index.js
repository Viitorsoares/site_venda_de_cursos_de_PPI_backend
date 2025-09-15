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

// let course = new Course(
//     "134679",
//     "Curso de Javascript",
//     "10-09-2025",
//     "10 horas",
//     "1000"
// );

// course.toRecord().then(() => {
//     console.log(`Curso gravado com sucesso`)
// }).catch((error) => {
//     console.log(`Erro ao gravar o curso ${error}`)
// })


// course.consult().then((listOfCourses) => {
//     for (const course of listOfCourses) {
//         console.log(course.toJSON())
//     }
// })


// course.delete().then(() => {
//     console.log("Curso deletado com sucesso!");
// }).catch((error) => {
//     console.log("Erro ao deletar o curso: " + error);
// })


// course.toAlter().then(() => {
//     console.log("Curso alterado com sucesso!");
// }).catch((error) => {
//     console.log("Erro ao alterar o curso: " + error);
// });
