
import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { robot, write } from "../assets";
import styles from './style';
// import GetStarted from '../Components/GetStarted';
import Card from '../Components/card';
import CourseData from '../Components/CourseData';


export default function Home() {
  return (
    <div>
      <Navbar />

      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} px-20`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row items-center py-[4px] px-4px  rounded-[10px] mb-2">
            <img src={write} alt="quote" className="w-[28px] h-[28px] p-1 " />
            <p className={`${styles.paragraph} `}>

              <p className="text-white"> Learn - Develop - Earn</p>
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full  ">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 ss:leading-[100.8px] leading-[75px]">
              "Never Stop learning <br className="sm:block hidden" />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 ">because</span>{" "}
            </h1>

          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 ss:leading-[100.8px] leading-[75px] w-full">
            Life Never Stops Teaching.
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
            Video Lectures aim to help millions of students across the world acquire
            knowledge, gain good grades, get jobs..
          </p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
          <div className='absolute z-[0] w-[80%] h-[85%] top-0 bg-gradient-to-r from-violet-300 to-violet-300 opacity-30 blur-3xl rounded-full	' />
        </div>
      </section>
      <div className={`flex flex-wrap justify-center item-center px-20 `}>

        <Card details = {CourseData}  />
    

      </div>

      <Footer />

    </div>
  )
}
