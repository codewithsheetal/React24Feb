import React, { useState } from 'react'
import UseLoader from './useLoader'

function Getdataloader() {
    const {Loading,error,startLoading,stopLoading,setErrormsg} = UseLoader();

    const [data,setData]= useState("");

    const handleClick=()=>{
           const result= false;
        startLoading();
         setTimeout(()=>{
         
         if(result){
            setData("Data Loaded Successfully")
            setErrormsg("");
         }
         else{
            
            setErrormsg("oops something is wrong")
            setData("");
         }
         stopLoading();
         },2000)
    }
    return (
        <>
        <button onClick={handleClick}>Load Data</button>
        {Loading && <h1> Loading</h1>}
        {data && <h1> {data}</h1>}
        {error && <p>{error}</p>}
        </>
    )
}

export default Getdataloader
