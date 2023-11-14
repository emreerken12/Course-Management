import React from 'react'

const Course = ({id,title,price,content,removeOneCourse}) => {
console.log(id,content,title,price);



  return (
    <div className='card'>
    <div className='cardTitlePrice'>
       <h2 className='cardTitle'> {title} </h2>
       <h4 className='cardPrice' >  {price}₺ </h4>

      
    </div>
    <p> {content} </p>
    <button className='cardDeleteBtn' onClick={()=>removeOneCourse(id)} > Delete  </button>
    </div>
  )
}

export default Course
