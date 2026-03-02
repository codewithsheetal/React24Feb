import React, { useEffect, useState } from 'react'

function SimpleExample() {
    const[count,setCount]=useState(0);
    const[count2,setCount2]=useState(10);

    // useEffect(()=>{
    //     console.log("hello");
        
    // })

    function demo(){
        console.log("call once");
        
    }
    // demo();

    // run only  once
    // useEffect(()=>{
    //     demo();
    // },[])

    // run every render
    // useEffect(()=>{
    //     demo();
    // })
    
    // call when count state change
    useEffect(()=>{
        demo();
    },[count])


    return (
        <>
        <button onClick={()=>setCount(count+1)}>count {count}</button>
        <button onClick={()=>setCount2(count2+10)}>count2 {count2}</button>
        </>
    )
}

export default SimpleExample
