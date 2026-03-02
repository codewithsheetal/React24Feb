import React, { useEffect } from 'react'

function ChildEffect({count}) {

    function childfun(){
        console.log("call once");
        
    }
    

    useEffect(()=>{
        childfun();
    },[])
    return (
        <>
        <h2>child comp {count}</h2>
        </>
    )
}

export default ChildEffect
