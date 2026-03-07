import React, { useCallback, useState } from 'react'
import ChildCallBack from './ChildCallBack'

function ParentCallBack() {
    const[count,setCount ]= useState(0);

    console.log("parent render");

    // const handleClick =()=>{
    //     console.log("function call");
        
    // }

    // useCallback => keep function ref same
    //React.memo => comp memoize
    
    const handleClick = useCallback(()=>{
        console.log("function call");
        
    },[])
    
    return (
        <>
        <h1> this is parent callback</h1>
        <button onClick={()=>setCount(count+1)}> inc {count}</button>
        <ChildCallBack  onClick={handleClick}/>
        </>
    )
}

export default ParentCallBack
