import React from 'react'

const ChildCallBack = React.memo(
    function ChildCallBack({onclick}) {

    console.log("child render");
    
    return (
        <>
        <h2>Child callback</h2>
        <button onClick={onclick}> click me</button>
        </>
    )
}

)
export default ChildCallBack
