import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import OAuth from "../Components/OAuth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { db } from "../Components/firebase";

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
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="py-4">
        <section className="grid  justify-items-center ">
          <h1 className="text-3xl text-center font-bold font-Poppins ">
            Sign Up
          </h1>

          <div className=" w-full md:w-[67%] lg:w-[40%] lg:ml-20 py-4  ">
            <form onSubmit={onSubmit} className="grid font-Poppins">
              <input
                type="text"
                id="name"
                className=" px-4  font-light text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out "
                value={name}
                onChange={onChange}
                placeholder="Full Name"
              />
              <br />
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
                    className="absolute right-3 top-4 cursor-pointer "
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                ) : (
                  <AiFillEye
                    className="absolute right-3 top-4 cursor-pointer"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                )}
              </div>
            </form>
            <button
              className="w-full  bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase 
              rounded hover:bg-blue-500 transition duration-150  ease-in-out hover: shadow-lg active:bg-blue-800 "
              type="ubmit"
            >
              Sign Up
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
