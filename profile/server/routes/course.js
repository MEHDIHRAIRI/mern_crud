import express from 'express';

import {getCourse, createCourse} from '../controllers/course.js'; 

const router = express.Router();

router.get('/', getCourse);
router.post('/', createCourse);

export default router;