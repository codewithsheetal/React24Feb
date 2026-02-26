import React, { useState } from 'react'

function Form() {
    const [name,setName]=useState("");
    const [form,setForm] = useState({
        name:"",
        email:"",
        age:""
    })
    const [email,setEmail]=useState("");
    const [isSubmitted,setSubmitted]=useState(false);

    function handleSubmit(e){
        e.preventDefault();
        console.log(email);
        setSubmitted(true)
        setEmail("")
        console.log("dj");
        
    }
    return (
        <>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <h1>{name}</h1>
        <form onSubmit={handleSubmit}>

            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <button type='submit'> submit</button>
        </form>

        { isSubmitted && <p>you submitted: {email}</p>}
        </>
    )
}

export default Form
