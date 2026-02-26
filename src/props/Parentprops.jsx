import React from 'react'
import Childprops from './Childprops'

function Parentprops() {

    return (
        <>
        <h1>Parent comp</h1>
        {/* <Childprops name="sheetal" roll={30}/>
        <Childprops roll={10}/> */}
        <Childprops text="click child " onClick={()=>alert("child clicked")}/>
        </>
    )
}

export default Parentprops
