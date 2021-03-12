import React, {useState, useEffect} from 'react';
import useStyles from './styles.js';
import {TextField, Button, Typography, Paper} from '@material-ui/core'; 
import FileBase from 'react-file-base64';
import {useDispatch, useSelector} from 'react-redux';
import {createCourse,updateCourse} from '../../actions/Courses.js';

const Form = ( { currentId, setCurrentId } ) => {
    const [courseData, setcourseData] = useState({title : '', message : '', link : '', tags : '', selectedFile : ''}); 
    const course = useSelector((state) => (currentId ? state.courses.find((p) => p._id === currentId) : null));
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(course) setcourseData(course);
    }, [course]);

    const Clear = () => {
        setCurrentId(0);
        setcourseData({ creator: '', title: '',link:'', message: '', tags: '', selectedFile: '' });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId === 0) {
            dispatch(createCourse(courseData));
            Clear();
        }
        else {
            dispatch(updateCourse(currentId, courseData));
            Clear();
        }
    }

    return (
        <Paper className={classes.Paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                 <Typography variant="h6">{currentId ? `Editing "${course.title}"` : 'Creating a Course'}</Typography>
                 <TextField name="title" variant="outlined" label="course title" fullWidth value={courseData.title} onChange={(e) => setcourseData({...courseData, title : e.target.value})} />
                 <TextField name="messege" variant="outlined" label="course messege" fullWidth value={courseData.message} onChange={(e) => setcourseData({...courseData, message : e.target.value})} />
                 <TextField name="link" variant="outlined" label="course link" fullWidth value={courseData.link} onChange={(e) => setcourseData({...courseData, link : e.target.value})} />
                 <TextField name="tags" variant="outlined" label="course tags" fullWidth value={courseData.tags} onChange={(e) => setcourseData({...courseData, tags : e.target.value})} />
                 <div className={classes.fileInput}><FileBase type="File" multiple={false} onDone={({base64}) => setcourseData({...courseData, selectedFile : base64})}/></div>
                 <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth > Submit </Button>
                 <Button  variant="contained" color="secondary" size="small" onClick={Clear} fullWidth > Clear </Button>
            </form>
            
        </Paper>
    );
}

export default Form;

