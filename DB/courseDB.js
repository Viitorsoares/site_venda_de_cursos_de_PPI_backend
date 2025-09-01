import Connection from "./connection.js";
import Course from "../Models/course.js";

export default class CourseDB {

    constructor() {
        this.init();
    }

    async init() {
        try {
            const connection = await Connection();
            const sql = `CREATE TABLE IF NOT EXISTS course (
                id_code VARCHAR(14) NOT NULL PRIMARY KEY,
                title_course VARCHAR(100) NOT NULL,
                data_course VARCHAR(20) NOT NULL,
                duration VARCHAR(50) NOT NULL,
                price VARCHAR(20) NOT NULL
            )`;

            await connection.execute(sql);

        } catch ( error ) {
            console.log(`Erro ao iniciar a tabela curso: ${error}`)
        }

    }

    async toRecord(course) {
        if (course instanceof Course) {
            const connection = await Connection();
            const sql = `INSERT INTO course (id_code, title_course, data_course, duration, price)
                         VALUES (?, ?, ?, ?, ?)`
            const parameters = [
                course.id_code,
                course.title_course,
                course.data_course,
                course.duration,
                course.price,
            ];

            await connection.execute(sql, parameters);
            await connection.release();
        }
    }

    async toAlter(course) {
        if (course instanceof Course) {
            const connection = await Connection();
            const sql = `UPDATE course SET 
                         title_course = ?, data_course = ?, duration = ?, price = ? WHERE id_code = ?`
            const parameters = [
                course.title_course,
                course.data_course,
                course.duration,
                course.price,
                course.id_code
            ];

            await connection.execute(sql, parameters);
            await connection.release();
        }
    }

    async delete(course) {
        if (course instanceof Course) {
            const connection = await Connection();
            const sql = `DELETE FROM course WHERE id_code = ?`;
            const parameters = [course.id_code];

            await connection.execute(sql, parameters);
            await connection.release();
            
        }
    }

    async consult() {
        const connection = await Connection();
        const sql = `SELECT * FROM course ORDER BY title_course`;
        const [records] = await connection.execute(sql);
        await connection.release();

        let listOfCourses = [];

        for (const record of records) {
            const course = new Course(
                record.id_code, 
                record.title_course, 
                record.data_course, 
                record.duration, 
                record.price, 
            )

            listOfCourses.push(course)
        }
        return listOfCourses;
    }
}