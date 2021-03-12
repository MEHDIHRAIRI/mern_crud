export default (courses = [], action) => {
     switch (action.type) {
           case 'CREATE':
                return [...courses, action.payload];

           case 'FETCH_ALL':
           
                return action.payload;

          case 'UPDATE':

                return courses.map((course) => (course._id === action.payload._id ? action.payload : course));

           case 'DELETE':

                return courses.filter((course) => (course._id !== action.payload));

          default:
           return courses;
     }
} 