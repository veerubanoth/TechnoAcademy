import React from 'react';
import python from '../Img/python.jpg';


function IndividualCourses() {
   return (
      <div >
         <div className="relative w-[300px] font-Poppins rounded-lg">
            <img src={python} alt="" />
            <div className="absolute  bg-gray-800 opacity-70 font-bold ">
               <h1 className='font-bold'> Building Food Ordering App using Xamarin.Forms</h1>
               <h3 className="text-xl text-white font-light">
                  Xamarin.Forms</h3>
               <p className="mt-2 text-sm text-gray-300 font-thin">Learn How To Build Xamarin.Forms Application From The Scratch Step By Step For Beginners</p>
            </div>
         </div>




      </div>


   )
}

export default IndividualCourses 