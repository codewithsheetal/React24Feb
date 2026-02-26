import React, { use, useState } from 'react'

function StateExample() {
    const [count, setCount] = useState(0);
    const [show,setShow]=useState(false);

    const[item,setItems]=useState([]) // A,B, D 

    // setItems([...item,"X"]); // A B D X

    // const [user,setUser]= useState({
    //     name:'sheetal',
    //     age:10
    // })

    // setUser({...user, name:"Sanvi"});

    setUser({
        ...user,
        fname:'patel'
    })

    console.log("render");


    function handleClick() {
        setCount(count + 10);
    }

    // setCount(count+1); // error infinite

    return (
        <>
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>count</button>
            <button onClick={handleClick}>count by 10</button>

            {/* <button onClick={() => 
                {
                setCount(count + 1)
                setCount(count + 1)
                setCount(count + 1)

                }}>count increase</button> */}
            <button onClick={() => 
                {
                setCount(prev=>prev+1)
                setCount(prev=>prev+1)
                setCount(prev=>prev+1)
                

                }}>count increase</button>

                <button onClick={()=>setShow(!show)}>Toggle </button>
                {show && <h1> hello this is showing</h1>}
        </>
    )
}

export default StateExample
