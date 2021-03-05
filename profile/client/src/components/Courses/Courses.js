import React from 'react';
import {useSelector, useSelectors} from 'react-redux';
import Course from './course/Course.js';
import useStyles from './styles.js';

const Courses = () => {
    const courses = useSelector((state) => state.courses);
    const classes = useStyles();
    console.log(courses);
    return (
        <>
        <h1>Courses</h1>
        <Course/>
        <Course/>
        </>
    );
}

export default Courses;

