import React, { useState } from 'react'

function Radio() {
    // const[gender,setGender]= useState("");
    const[gender,setGender]= useState("female");

    function handleChange(e){
        setGender(e.target.value)
    }

    return (
        <>
        <input type="radio" name="gender" value="male" onChange={handleChange}
        checked ={gender==="male"}
        /> male
        <input type="radio" name="gender" value="female" onChange={handleChange}
         checked ={gender==="female"}
        /> female
        <input type="radio" name="gender"  value="other" onChange={handleChange}
         checked ={gender==="other"}
        /> other

        <p> selected: {gender}</p>
        </>
    )
}

export default Radio
