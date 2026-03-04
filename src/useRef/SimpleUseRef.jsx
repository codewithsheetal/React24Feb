import React, { useRef } from 'react'

function SimpleUseRef() {
    const inputRef = useRef();
    console.log("render");
    
    function focusInput(){
        // console.log("hello");
        inputRef.current.focus();
        
    }

    function getvalue(){
        console.log(inputRef.current.value);
        
    }

    function showhideinput(){
        if(inputRef.current.style.display !='none'){
            inputRef.current.style.display ='none'
        }
        else{
            inputRef.current.style.display = 'inline'
        }
    }


    
    return (
        <>
        <input type="text"  ref={inputRef}/>
        <button onClick={focusInput}>focus Input</button>
        <button onClick={getvalue}>get Input</button>
        <button onClick={showhideinput}> show and hide</button>
        </>
    )
}

export default SimpleUseRef
