import React, {useState} from 'react';
import useStyles from './styles.js';
import {TextField, Button, Typography, Paper} from '@material-ui/core'; 
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import {createCourse} from '../../actions/Courses.js';

const Form = () => {
    const [courseData, setcourseData] = useState({title : '', message : '', link : '', tags : '', selectedFile : ''}); 
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCourse(courseData));
    }
    const Clear = () => {
    }

    return (
        <Paper className={classes.Paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                 <Typography variant="h6">Create Course</Typography>
                 <TextField name="title" variant="outlined" label="course title" fullWidth value={courseData.title} onChange={(e) => setcourseData({...courseData, title : e.target.value})} />
                 <TextField name="messege" variant="outlined" label="course messege" fullWidth value={courseData.message} onChange={(e) => setcourseData({...courseData, message : e.target.value})} />
                 <TextField name="link" variant="outlined" label="course link" fullWidth value={courseData.link} onChange={(e) => setcourseData({...courseData, link : e.target.value})} />
                 <TextField name="tags" variant="outlined" label="course tags" fullWidth value={courseData.tags} onChange={(e) => setcourseData({...courseData, tags : e.target.value})} />
                 <div className={classes.fileInput}><FileBase type="File"multiple={false}onDone={({base64}) => setcourseData({...courseData, selectedFile : base64})}/></div>
                 <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth > Submit </Button>
                 <Button  variant="contained" color="secondary" size="small" onClick={Clear} fullWidth > Clear </Button>
            </form>
            
        </Paper>
    );
}

export default Form;

