import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
    title : String,
    message : String,
    link : String,
    tags : [String],
    selectedFile : String,
});

const CourseMessage = mongoose.model('CourseMessage', courseSchema);

export default CourseMessage;