import React from 'react'
import { useParams } from 'react-router-dom'

function DynamicRouting() {

    const {id} = useParams();
    return (
        <>
        <h1>product detail page</h1>
        <h2>product id : {id}</h2>
        </>
    )
}

export default DynamicRouting
