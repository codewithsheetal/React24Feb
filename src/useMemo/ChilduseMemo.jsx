import React from 'react'

const ChilduseMemo = React.memo(({data})=>{
    console.log("child render");

    return(
        <>
            <h2>child usememo {data.name}</h2>
        </>
    )
    
})

export default ChilduseMemo
