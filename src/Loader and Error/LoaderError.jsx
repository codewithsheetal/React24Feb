import React, { useState } from 'react'

function LoaderError() {
    const[loading,setLoading] = useState(false);
    const [data,setData] = useState("");
    const [error,setError]= useState("");

    function handleClick(){
        setLoading(true);
         const result = true;

         setTimeout(()=>{
         if(result){
            setData("Data Loaded Successfully")
            setError("");
         }
         else{
            setError("something is wrong")
            setData("");
         }
         setLoading(false)
         },2000)
    }
    return (
        <>
        <button onClick={handleClick}>Load Data</button>
        {loading && <h1> Loading</h1>}
        {data && <h1> {data}</h1>}
        {error && <p>{error}</p>}
        </>
    )
}

export default LoaderError
