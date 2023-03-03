import React from "react";
// import { CSSTransition } from "react-transition-group";


const Card = (props) => {
    return (
        <>
            {props.details.map((value, index) => (
                <div className="w-80 h-80 bg-gray-800 rounded-lg shadow-lg p-6  mr-12 mb-10 key = {index}">
                <div>
                    <img className="bg-orange-300 p-1" src={value.img} alt="img" />
                </div>
                <div>
                    <p className="text-blue-400 py-2 font-Poppins font-bold "> {value.title}</p>
                    <p className="text-white">  {value.description} </p>
                </div>
                <div>
                    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={value.img} alt="img" />
                </div>

            </div>))}
        </>
    )
}

export default Card;


