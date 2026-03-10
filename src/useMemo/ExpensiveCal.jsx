import React, { useMemo, useState } from 'react'

function ExpensiveCal() {

    const[count,setCount]= useState(0);

    const expensivecal =(num)=>{
        //
        console.log("calculatipng...");
        
        return num * 10;
    }

    // expensivecal(100);

    const count10 = useMemo(()=>expensivecal(count),[count]);
    return (
        <>
        <h1>hello</h1>
        <h2>{count10}</h2>
        <button onClick={()=>setCount(count+1)}>count{count}</button>
        {/* <button onClick={()=>setCount(count+1)}>count{count}</button> */}
        </>
    )
}

export default ExpensiveCal
