import React from 'react';
import {useSelector} from 'react-redux';
import Course from './course/Course.js';
import useStyles from './styles.js';
import {Grid, CircularProgress} from '@material-ui/core';


const Courses = ({ setCurrentId }) => {
    const courses = useSelector((state) => state.courses);
    const classes = useStyles();
    console.log(courses);
    return (
        !courses.length ? <CircularProgress /> :(
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {courses.map((course) => (
                    <Grid key={course._id} item xs={12} sm={6} md={6}>
                        <Course course={course} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Courses;

