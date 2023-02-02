import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import OAuth from "../Components/OAuth";
import { Link } from "react-router-dom";

export default function Login() {
  const [ShowPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <>
      <Navbar />
      <div className="py-4">
        <section className="grid  justify-items-center ">
          <h1 className="text-3xl text-center font-bold font-Poppins ">
            Sign In
          </h1>

          <div className=" w-full md:w-[67%] lg:w-[40%] lg:ml-20 py-4  ">
            <form className="grid font-Poppins br">
              <input
                type="email"
                id="email"
                className=" px-4  font-light text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out "
                value={email}
                onChange={onChange}
                placeholder="Email Address"
              />
              <br />

              <div className=" mb-6 relative">
                <input
                  type={ShowPassword ? "text" : "password"}
                  id="password"
                  className=" w-full px-4  font-light text-xl
                   text-gray-700 bg-white border-gray-300 border-b rounded transition ease-in-out "
                  value={password}
                  onChange={onChange}
                  placeholder="Password"
                />

                {ShowPassword ? (
                  <AiFillEyeInvisible
                    className=" absolute right-3 top-4 cursor-pointer "
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                ) : (
                  <AiFillEye
                    className="absolute right-3 top-4 cursor-pointer"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                )}
                <div className="py-2 flex justify-between whitespace-nowrap text-sm sm:text-xm">
                  <p className="mb-6 mx-1"> Don't Have Account?  <Link to="/SignUp" className="text-red-600 hover:text-red-700 transition duration-150 ease-in-out ml-1">Register</Link></p>
                  <p className="text-blue-600"> <Link>Forgot Password?</Link></p>
                </div>
              </div>
            </form>
            <button
              className="w-full  bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase 
              rounded hover:bg-blue-500 transition duration-150  ease-in-out hover: shadow-lg active:bg-blue-800 "
              type="submit"
            >
              Sign In
            </button>
            <div
              className=" my-4 before:border-t flex before:flex-1 items-center before:border-gray-300 after:border-t after:flex-1 after:border-gray-300
              "
            >
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
