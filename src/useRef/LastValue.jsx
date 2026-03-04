import React, { useEffect, useRef, useState } from 'react'

function LastValue() {
    const [count,setCount] = useState(0)
    const prevCount = useRef(-1);
    
    useEffect(()=>{
        prevCount.current= count
    },[count])
    return (
        <>
        <p>current : {count} </p>
        <p>prev : {prevCount.current}</p>

        <button onClick={()=>setCount(count+10)}>count inc</button>
        </>
    )
}

export default LastValue


// first render 
// count =0 
// prevcount=-1

// prevcount =0

// second render 
// count =10
// prevcount =0

// prevcount =10

// third render
// count =20 
// prevcount =10

// prevcount =20

