import React from 'react'
import JsxExample from './JsxExample';

function ConditionalRendering() {
    const islogin =false;
    let msg;
    if(islogin){
        msg="yeah..."
    }
    else{
        msg="Oops!"
    }
    return (
        <>
        {/* {islogin ? <h1>welcome</h1>:<h1>please login</h1>} */}
        {/* {islogin ? <JsxExample/>:<h1>please login</h1>} */}

        {/* {islogin && <JsxExample/>} */}

        {msg}
        </>
    )
}

export default ConditionalRendering
