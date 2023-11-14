import './App.css';
import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Courses from './Courses';
import Loading from './Loading';




function App() {
const [courses, setCourses] = useState([])
const [loading, setLoading] = useState(true)







const fetchCourses =async ()=>{

 setLoading(true); 
try{const response = await axios.get('http://localhost:3001/courses');
setCourses(response.data)
setLoading(false);
}
catch(error){}
setLoading(false)


}



useEffect(()=>{
fetchCourses();
},[])

const deleteCourse = (id) => {
  const afterDeletedCourses = courses.filter((course) => course.id !== id);
  setCourses(afterDeletedCourses);
};


return (
  <div className="App">
    {loading ? <Loading /> : (
      <>
        {courses.length === 0 ? (
          <div className='refreshDiv'>
            <h2> Kursların hepsini sildin. </h2>
            <button className='refreshBtn' onClick={()=>{fetchCourses()}} > Yenile ve Kursları Getir. </button>
          </div>
        ) : (
          <Courses courses={courses} removeCourse={deleteCourse} />
        )}
      </>
    )}
  </div>
);
}

export default App;