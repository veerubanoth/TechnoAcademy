import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Pages/Home.js';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { VideoCourses } from './Pages/VideoCourses';
import Certifications from './Pages/Certifications';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/video-courses" element={<VideoCourses />}></Route>
          <Route path="/certifications" element={<Certifications />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
