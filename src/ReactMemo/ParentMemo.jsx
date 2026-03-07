import React, { useState } from 'react'
import ChildMemo from './ChildMemo'

function ParentMemo() {
    const [count,setCount]= useState(0);
    console.log("parent render");
    
    return (
        <>
        <h1>parent comp</h1>
        <button onClick={()=>setCount(count+1)}>count {count}</button>
        <ChildMemo/>
        </>
    )
}

export default ParentMemo
