import React from 'react'
import { useNavigate } from 'react-router-dom'

function ButtonClick() {
    const nav =useNavigate();

    function handleClick(){
        nav("/about")
    }
    return (
        <>
        <button onClick={handleClick}>Go to about </button>
        </>
    )
}

export default ButtonClick
