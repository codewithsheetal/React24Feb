import React from 'react'
import useToggle from './useToggle'

function Hookused() {
    const [ value, handleToggle]= useToggle();
    return (
        <>
            <button onClick={handleToggle}>
                {value?"hide":"show"}
            </button>

            {value && <p>text visible</p>}
        </>
    )
}

export default Hookused
