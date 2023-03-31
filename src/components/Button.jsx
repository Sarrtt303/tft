import React from 'react'



const Button = ({ name, clickHandler, bgColor }) => {
    return (
        <button onClick={clickHandler} className={`bg-[#${bgColor}] text-white rounded-md px-4 py-2`} >{name}</button>
    )
}

export default Button


