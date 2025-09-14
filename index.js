import Course from "./Models/course.js";

let course = new Course(
    "134679",
    "Curso de Javascript",
    "10-09-2025",
    "10 horas",
    "1000"
);

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
