import { Router } from 'express';
import CourseController from '../Controllers/courseController.js';

const courseRouter = Router();
const courseController = new CourseController();
courseRouter.get('/', courseController.consult)
.get('/:id_code', courseController.consult)
.post('/', courseController.toRecord)
.put('/:id_code', courseController.toAlter)
.delete('/:id_code', courseController.delete)

export default courseRouter;
