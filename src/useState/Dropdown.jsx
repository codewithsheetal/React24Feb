import React, { useState } from 'react'

function Dropdown() {
    const[country,setCountry] = useState("")

    const [countries]=["USA","India","Aus"];

    function handleChange(e){
        setCountry(e.target.value);
    }
    return (
        <>
        <h2>selected country :{country}</h2>
        <select onChange={handleChange}>
            <option value="">select country</option>
            <option value="USA">USA</option>
            <option value="INDIA">India</option>
            <option value="Aus">Aus</option>

        </select>


        </>
    )
}

export default Dropdown
