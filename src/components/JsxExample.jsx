import React from 'react'

function JsxExample() {
    let name="sheetal"
    function demo(){
        return "hello this is demo"
    }
    function demo2(){
        return <h1>hello this is demo2</h1>
    }
    return (
        <>
        {10+20}
        {demo2()}
        <h1>{demo()}</h1>
        <h1 className="box">hello {name}</h1>
        {/* <img src="" alt="" /> */}
        {/* <button onClick={}>submit</button> */}

        {/* {true ?<h1>hello true</h1>:<h1>false</h1>} */}
        {/* <h1>hello</h1> */}

        <h1 style={{color:'red'}}>hello this jsx </h1>
        </>
    )
}

export default JsxExample
