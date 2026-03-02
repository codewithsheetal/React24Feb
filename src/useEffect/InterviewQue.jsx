import React, { useEffect, useState } from 'react'

function InterviewQue() {
    const [count,setCount]=useState(0)

    //infinite loop
    // useEffect(()=>{
    //     setCount(count+1)
    // })
    //infinite loop
    // useEffect(()=>{
    //     setCount(count+1)
    // },[count])

    useEffect(()=>{
        setCount(count+1)
    },[])
    return (
        <>
        <p>count {count}</p>
{/* <button onClick={()=>setCount(count+1)}>count </button> */}
        </>
    )
}

export default InterviewQue
