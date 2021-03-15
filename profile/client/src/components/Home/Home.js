import React, { useEffect, useState } from 'react'
import {Container, Grow, Grid} from '@material-ui/core';
import Courses from '../Courses/Courses';
import {getCourses} from '../../actions/Courses'
import {useDispatch} from 'react-redux';
import Form from '../Form/Form';
function Home() {
    const [currentId, setCurrentId] = useState(null); 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourses());
        return () => {

        }
    }, [dispatch])
    return (
        <Grow in>
        <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid items xs={12} sm={7}>
                   <Courses setCurrentId={setCurrentId} /> 
                </Grid>
                <Grid items xs={12} sm={4}>
                    <Form currentId = {currentId} setCurrentId={setCurrentId} />
                </Grid>
            </Grid>
        </Container>
    </Grow>
    )
}

export default Home
