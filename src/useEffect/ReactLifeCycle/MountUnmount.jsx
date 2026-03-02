import React, { useState } from 'react'
import ReactLifeCycle from './ReactLifeCycle'

function MountUnmount() {
    const[show,setShow]= useState(false)
    
        return (
            <>
            <button onClick={()=>setShow(!show)}>show and hide child comp</button>
           {show && <ReactLifeCycle/>} 
           
            </>
        )
    }

export default MountUnmount
