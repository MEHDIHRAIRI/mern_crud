import CourseMessage from '../models/courseMessage.js';

export const getCourse = async (req, res) => {
    try {
        const courseMessage = await CourseMessage.find();

        console.log(courseMessage);
        res.status(200).json(courseMessage);
    } catch (error) {
        res.status(404).json({message : error.message()});
    }
}

export const createCourse = async (req, res) => {
    
     const course = req.body;
     const newCourse = new CourseMessage(course);

    try {
     
        await newCourse.save();
        res.status(201).json(newCourse);

    } catch (error) {

        res.status(409).json({message : error.message()});
    
    }
}