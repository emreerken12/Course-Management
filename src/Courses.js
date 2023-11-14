import React from 'react'
import Course from './Course'
import { useState } from 'react'
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'


const Courses = ({courses,removeCourse}) => {

  const [index, setIndex] = useState(0);
  const {content,title,price}=courses[index];

  const checkIndex = (index) => {
    if (index < 0) {
      return courses.length - 1; 
    }
    if (index > courses.length - 1) { 
      return 0;
    }
    return index;
  };
  

const nextCourse = (index)=>{
setIndex((index)=>{
  let newIndex2 = index +1;
  return checkIndex(newIndex2);

})
}

const getRandomCourse = ()=>{
 let randomNumber = Math.floor(Math.random()*courses.length)

if(randomNumber === index){
  return randomNumber -1;
} setIndex(checkIndex(randomNumber))


 console.log(randomNumber)

}


  const prevCourse = (index) => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

console.log(courses)

  return (
    <div className='courseMainDiv' >
   <div className='courseTitleandButton' >
    <h2>Kurslarım</h2>
    <button onClick={getRandomCourse} className='refreshBtn'>Rastgele Kurs Seç!</button>
   </div>
<button className='prevNext' onClick={prevCourse} > <FaChevronLeft/> </button>
   <div className='cardDiv'>
   <div className='card'>
    <div className='cardTitlePrice'>
       <h2 className='cardTitle'> {title} </h2>
       <h4 className='cardPrice' >  {price}₺ </h4>

      
    </div>
    <p> {content} </p>
    
    </div>
{


//     courses.map((course)=>{
// return(
//     <Course key={course.id} {...course} removeOneCourse={removeCourse} />
// )
//     })
}
   </div>
   <button className='prevNext' onClick={nextCourse}> <FaChevronRight/> </button>
    </div>
  )
}

export default Courses
