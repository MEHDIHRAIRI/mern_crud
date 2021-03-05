export default (courses = [], action) => {
     switch (action.type) {
       case 'CREATE':
                return [...courses, action.payload];

           case 'FETCH_ALL':
           
                return action.payload;
   
       default:
           return courses;
     }
} 