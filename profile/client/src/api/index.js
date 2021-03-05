import axios from 'axios';

const url = "http://localhost:5000/course";

export const fetchCourses = () => axios.get(url);
export const createCourses = (newCourse) => axios.post(url, newCourse);