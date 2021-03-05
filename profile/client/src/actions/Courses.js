import * as api from '../api';

export  const getCourses = () => async (dispatch) => {
    try {
        const {data} = await api.fetchCourses();
        
        dispatch({type: 'FETCH_ALL', payload: data });
    } catch (error) {
    }
};

export  const createCourse = (course) => async (dispatch) => {
    try {
        const { data } = await api.createCourses(course);
        dispatch({type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};