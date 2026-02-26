import React from 'react'

// function Childprops(props) {
// function Childprops({name,roll}) {
// function Childprops({name="Guest",roll}) {
function Childprops({text,onClick}) {
    return (
        <>
        {/* <h2>child comp {props.name}- {props.roll}</h2> */}
        {/* <h2>child comp {name}-{roll}</h2> */}
        <h2 onClick={onClick}>{text}</h2>

        </>
    )
}

export default Childprops
