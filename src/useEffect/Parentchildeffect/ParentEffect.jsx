import React, { useState } from 'react'
import ChildEffect from './ChildEffect';

function ParentEffect() {
    const [count,setCount]=useState(0);
    return (
        <>
        <button onClick={()=>setCount(count+1)}>count {count}</button>
        <ChildEffect count={count}/>
        </>
    )
}

export default ParentEffect
