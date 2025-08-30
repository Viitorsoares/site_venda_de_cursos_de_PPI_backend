import Connection from "./connection.js";
import Course from "../Models/course.js";

export default class CourseDB {

    constructor() {
        this.init();
    }

    async init() {
        try {
            const connection = await Connection();
            const sql = `CREATE TABLE IF NOT EXISTS pacote (
                codigo VARCHAR(14) NOT NULL PRIMARY KEY,
                nome_pacote VARCHAR(100) NOT NULL,
                data VARCHAR(20) NOT NULL,
                destino VARCHAR(100) NOT NULL,
                valor VARCHAR(20) NOT NULL,
            )`;

            await connection.execute(sql);

        } catch ( error ) {
            console.log(`Erro ao iniciar a tabela pacote: ${error}`)
        }

    }

    async toRecord(course) {
        if (course instanceof Course) {
            const connection = await Connection();
            const sql = `INSERT INTO pacote (codigo, nome_pacote, data, destino, valor)
                         VALUES (?, ?, ?, ?, ?)`
            const parameters = [
                course.id_code,
                course.title_course,
                course.date,
                course.duration,
                course.price,
            ];

            await conexao.execute(sql, parametros);
            await conexao.release();
        }
    }

    async toAlter(course) {
        if (course instanceof Course) {
            const conexao = await connection();
            const sql = `UPDATE pacote SET 
                         nome_pacote = ?, data = ?, destino = ?, valor = ? WHERE codigo = ?`
            const parametros = [
                course.nome_pacote,
                course.data,
                course.destino,
                course.valor,
                course.codigo
            ];

            await conexao.execute(sql, parametros);
            await conexao.release();
        }
    }

    async delete(course) {
        if (course instanceof Course) {
            const conexao = await connection();
            const sql = `DELETE FROM pacote WHERE codigo = ?`;
            const parametros = [course.codigo];

            await conexao.execute(sql, parametros);
            await conexao.release();
            
        }
    }

    async consult() {
        const conexao = await connection();
        const sql = `SELECT * FROM pacote ORDER BY nome_pacote`;
        const [registros, campos] = await conexao.execute(sql);
        await conexao.release();
        let listaPacotes = [];
        for (const registro of registros) {
            const pacote = new Pacote(
                registro.codigo, 
                registro.nome_pacote, 
                registro.data, 
                registro.destino, 
                registro.valor, 
            )

            listaPacotes.push(pacote)
        }
        return listaPacotes;
    }
}