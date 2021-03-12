import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
    title : String,
    message : String,
    link : String,
    tags : [String],
    selectedFile : String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const CourseMessage = mongoose.model('CourseMessage', courseSchema);

export default CourseMessage;