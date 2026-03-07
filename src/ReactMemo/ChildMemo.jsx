import React from 'react'

// function ChildMemo() {
//     console.log("child render");
    
//     return (
//         <>
//         <h2>child comp</h2>
//         </>
//     )
// }

const ChildMemo = React.memo(
    function ChildMemo() {
    console.log("child render");
    
    return (
        <>
        <h2>child comp</h2>
        </>
    )
}
)
export default ChildMemo
