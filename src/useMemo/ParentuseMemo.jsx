import React, { useMemo, useState } from 'react'
import ChilduseMemo from './ChilduseMemo'

function ParentuseMemo() {
    const [count,setCount]= useState(0);
    console.log("parent render ");

    const data=useMemo(()=>({name:"sheetal"}),[]);
    
    return (
        <>
        <h1>parent use memo </h1>
        <button onClick={()=>setCount(count+1)}>count  {count} </button>
        {/* <ChilduseMemo data={{name:"sheetal"}}/> */}
        <ChilduseMemo data={data}/>
        </>
    )
}

export default ParentuseMemo
