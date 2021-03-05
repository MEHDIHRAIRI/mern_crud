import React, {useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import courses from './components/images/1.png';
import Courses from './components/Courses/Courses.js';
import Form from './components/Form/Form.js';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import {getCourses} from './actions/Courses'



const App = () =>{
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourses());
        return () => {

        }
    }, [dispatch])


    return(
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherent">
                <Typography className={classes.heading} variant="h2" align="center">Courses</Typography>
                <img className={classes.image} src={courses} alt="courses" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid items xs={12} sm={7}>
                           <Courses /> 
                        </Grid>
                        <Grid items xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

    export default App;