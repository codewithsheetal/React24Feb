import React, { useReducer } from 'react'
import CounterReducer, { intitalData } from './CounterReducer'

function UIforCounterReducer() {

    const [state, dispatch] = useReducer(CounterReducer, intitalData)
    return (
        <>

            <h1>counter using reducer</h1>
            <h2>counter : {state.count}</h2>
            <h2>Label : {state.label}</h2>
            <button onClick={() => dispatch({ type: "INC" })}>Inc </button>
            <button onClick={() => dispatch({ type: "DEC" })}>Dec </button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
            <button onClick={() => dispatch({ type: "INCBYFive", payload: 5 })}>Inc by 5</button>
            {/* <button onClick={() => dispatch({
                type: "INCBYFive", payload: {
                    value: 5,
                    label: "added 5",
                }
                })}>
                Inc by 5</button> */}
        </>


    )
}

export default UIforCounterReducer
