import mongoose from 'mongoose';
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

export const updateCourse = async (req, res) => {
    const { id } = req.params;
    const { title, message, link, tags, selectedFile } = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Course Found ! ');

    const updatedCourse = { title, message, link, tags, selectedFile, _id: id };

    await CourseMessage.findByIdAndUpdate(id, updatedCourse, { new: true });
    res.json(updatedCourse);
    
}

export const DeleteCourse = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Course Found with id : ${id} ');

    await CourseMessage.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
    
}