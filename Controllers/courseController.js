import Course from '../models/courseModel.js';

export default class CourseController {
    
toRecord(request, response) {
    if (request.method === 'POST' && request.is('application/json')) {
        const datas = request.body;
        if (datas.id_code && datas.title_course && datas.data_course && datas.duration && datas.price) {
            const course = new Course(datas.id_code, datas.title_course, datas.data_course, datas.duration, datas.price);
            course.toRecord()
            .then(() => {
                response.status(200).json({ 
                    status: 'true',
                    message: 'Curso registado com sucesso!'
                 });
            })
            .catch((error) => {
                response.status(500).json({ 
                    status: 'false',
                    message: 'Erro ao registrar o cliente!' + error.message
                 });
            })
        }
        else {
            response.status(400).json({ 
                status: 'false',
                message: 'Faltam dados obrigatórios para o registo do curso.'
             });
        }
    }
    else {
        response.status(400).json({ 
            status: 'false',
            message: 'Requisição inválida!'
        });
    }
}




toAlter(request, response) {
    if ((request.method === 'PUT' || request.method === 'PATCH') && request.is('application/json')) {
        const datas = request.body;
        const id_code = request.params.id_code;

        if (id_code && datas.title_course && datas.data_course && datas.duration && datas.price) {
            const course = new Course(id_code, datas.title_course, datas.data_course, datas.duration, datas.price);
            course.toAlter()
            .then(() => {
                response.status(200).json({ 
                    status: 'true',
                    message: 'Curso atualizado com sucesso!'
                 });
            })
            .catch((error) => {
                response.status(500).json({ 
                    status: 'false',
                    message: 'Erro ao atualizar o cliente!' + error.message
                 });
            })
        }
        else {
            response.status(400).json({ 
                status: 'false',
                message: 'Faltam dados obrigatórios para a atualização do curso.'
             });
        }
    }
    else {
        response.status(400).json({ 
            status: 'false',
            message: 'Requisição inválida!'
        });
    }
}




delete(request, response) {
    if (request.method === 'DELETE') {
        const id_code = request.params.id_code;
        if (id_code) {
            const course = new Course();
            course.consultId(id_code)
            .then((listCourse) => {
                const course = listCourse[0];
                if (course) {
                    course.delete()
                    .then(() => {
                        response.status(200).json({ 
                            status: 'true',
                            message: 'Curso excluído com sucesso!'
                         });
                    })
                    .catch((error) => {
                        response.status(500).json({ 
                            status: 'false',
                            message: 'Erro ao excluir o curso!' + error.message
                         });
                    });
                }
                else {
                    response.status(404).json({ 
                        status: 'false',
                        message: 'Curso não encontrado para exclusão!'
                    });
                }
            })
            .catch((error) => {
                response.status(500).json({ 
                    status: 'false',
                    message: 'Erro ao deletar o curso!' + error.message
                 });
            });
        }
        else {
            response.status(400).json({ 
                status: 'false',
                message: 'Falta o código do curso para exclusão.'
             });
        }
    }
    else {
        response.status(400).json({ 
            status: 'false',
            message: 'Requisição inválida!'
        });
    }




consult(request, response) {
    if (request.method === 'GET') {
        const id_code = request.params.id_code;
        const course = new Course();
        if (id_code) {
            course.consultId(id_code)
            .then((listCourse) => {
                if (listCourse.length > 0) {
                    response.status(200).json({ 
                        status: 'true',
                        message: 'Curso encontrado com sucesso!',
                        courses: listCourse
                    });
                }
                else {
                    response.status(404).json({ 
                        status: 'false',
                        message: 'Curso não encontrado!'
                    });
                }
            })
            .catch((error) => {
                response.status(500).json({ 
                    status: 'false',
                    message: 'Erro ao consultar o curso!' + error.message
                 });
            })
        }
        else {
            course.consult()
            .then((listCourse) => {
                response.status(200).json({ 
                    status: 'true',
                    message: 'Cursos consultados com sucesso!',
                    courses: listCourse
                 });
            })
            .catch((error) => {
                response.status(500).json({ 
                    status: 'false',
                    message: 'Erro ao consultar os cursos!' + error.message
                 });
            });
        }
    }
    else {
        response.status(400).json({ 
            status: 'false',
            message: 'Requisição inválida!'
        });
    }

}

}