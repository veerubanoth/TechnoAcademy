import React, { Component } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

export class VideoCourses extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className='text-white'>Video Courses</div>
        <Footer />
      </>

    )
  }
}

export default VideoCourses