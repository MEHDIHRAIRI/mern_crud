import React, {useState, useEffect} from 'react';
import useStyles from './styles.js';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment';
import {useDispatch} from 'react-redux';
import { DeleteCourse } from '../../../actions/Courses.js';



const Course = ({ course, setCurrentId }) => {

    
    const classes = useStyles();
    const dispatch = useDispatch();

    
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={course.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={course.title} />
            <div className={classes.overlay}>
                <Typography variant="body2">{moment(course.createdAt).fromNow()}</Typography>
                <Typography variant="h6">{course.link}</Typography>
            </div>
            <div className={classes.overlay2}>
                    <Button style={{color: 'white'}} size="small" onClick={()=> setCurrentId(course._id)} ><MoreHorizIcon fontSize="default" /></Button>
            </div>
            <div className={classes.details}>
                  <Typography variant="body2" color="textSecondary" component="h2">{course.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
                <Typography className={classes.title} variant="h5" gutterBottom>{course.title}</Typography>
                <CardContent>
                    <Typography  variant="h5" gutterBottom>{course.message}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions} >
                    <Button size="small" color="primary" ><ThumbUpAltIcon fontSize="small" /> Like {course.likeCount} </Button>
                    <Button size="small" color="Primary" onClick={() => dispatch(DeleteCourse(course._id))}  > <DeleteIcon fontSize="small" />Delete</Button>
                </CardActions>
        </Card>
    );
};

export default Course;

