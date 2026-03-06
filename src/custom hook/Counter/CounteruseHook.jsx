import React from 'react'
import useCounter from './useCounter'

function CounteruseHook() {

    const { count, inc, dec} = useCounter(10);
    return (
        <>
        <h1>{count}</h1>
        <button onClick={inc}>inc</button>
        <button onClick={dec}>dec</button>
        </>
    )
}

export default CounteruseHook
