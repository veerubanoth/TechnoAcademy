import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Lambda_logo from "../Img/Lambda_logo.png";
import { close, menu } from "../assets";
import { navLinks } from "../constants";


const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();


    return (
        <nav className='W-full flex py-6 justify-between items-center navbar px-20 '>
            <img src={Lambda_logo} alt="technoacademy" className='h-9' onClick={() => navigate("/")} />
            <p className='font-semibold text-2xl cursor-pointer text-white py-1 px-1' onClick={() => navigate("/")}> Techno Academy</p>


            <ul className='list-none sm:flex hidden justify-end items-center flex-1 text-white '>
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                        onClick={() => setActive(nav.title)}
                    >
                        <a href={`${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center text-black">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle(!toggle)}
                />

                <div
                    className={`${!toggle ? "hidden" : "flex"
                        } p-6 bg-gradient-to-r from-violet-200 to-fuchsia-200 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <a href={`${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;

