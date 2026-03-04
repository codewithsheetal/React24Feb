import React, { useContext } from 'react'
import Child from './Child'
import SeparateContext from './SeparateContext'

function Parent() {
    const data= useContext(SeparateContext);
    return (
        <>
        <h2>parent comp: {data}</h2>
        <Child/>
        </>
    )
}

export default Parent
