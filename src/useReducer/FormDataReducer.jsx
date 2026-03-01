import React, { act, useReducer } from 'react'

const studentData ={
    name:'',
    email:'',
    city:''
}
const reducer =(data,action)=>{
    return {...data, [action.type]:action.val}
}
function FormDataReducer() {
    const [state,dispatch]= useReducer(reducer,studentData)
    return (
        <>
            <h1>use Reducer form data</h1>

            <input type="text" onChange ={(event)=>dispatch({val:event.target.value,type:'name'})}placeholder='name' />
            <br /><br />
            <input type="text" onChange ={(event)=>dispatch({val:event.target.value,type:'email'})} placeholder='email' />
            <br /><br />
            <input type="text" onChange ={(event)=>dispatch({val:event.target.value,type:'city'})} placeholder='city' />
            <br /><br />
            <h1>form data </h1>
            <h2>name: {state.name}</h2>
            <h2>name: {state.email}</h2>
            <h2>name: {state.city}</h2>
        </>
    )
}

export default FormDataReducer
