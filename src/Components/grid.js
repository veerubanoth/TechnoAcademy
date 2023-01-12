import React from 'react';
import IndividualCourses from './Individual_Courses';


function Grid() {
   return (
      <div class=" text-center p-4 ">
         <div>
            <h1 className='text-3xl font-poppins font-semibold '>Online Video Courses</h1>
            <p className='font-poppins font-light p-4'>Video Lectures aim to help millions of students across the world acquire
               knowledge, gain good grades, get jobs.</p>
         </div>

         <div className='flex flex-wrap justify-evenly p-4  '>
            <IndividualCourses />
            <IndividualCourses />
            <IndividualCourses />
            <IndividualCourses />
         </div>


      </div>
   )
}

export default Grid