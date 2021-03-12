import express from 'express';

import {getCourse, createCourse, updateCourse, DeleteCourse} from '../controllers/course.js'; 

const router = express.Router();

router.get('/', getCourse);
router.post('/', createCourse);
router.patch('/:id', updateCourse);
router.delete('/:id', DeleteCourse);


export default router;