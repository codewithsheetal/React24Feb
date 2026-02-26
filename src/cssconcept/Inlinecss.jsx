import React from 'react'

function Inlinecss() {
    const flag = true;
    return (
        <>
        {/* <h1 style={{color:"red"}}>Hello</h1> */}
        {/* <h1 style={{color:"red", backgroundColor:"blue"}}>Hello</h1> */}

        {/* condition css  */}

        <h1 style={{color:flag?"green":"red"}}>Condition</h1>
        </>
    )
}

export default Inlinecss
