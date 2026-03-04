import React from 'react'
import Parent from './Parent'

function GrandParent() {
    return (
        <>
        <h1>Grandparent</h1>
        <Parent/>
        </>
    )
}

export default GrandParent
