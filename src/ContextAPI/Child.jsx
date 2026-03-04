import React, { useContext } from 'react'
import FamilyContext from './FamilyContext'

function Child() {
    const data = useContext(FamilyContext);
    // console.log(data);
    
    return (
        <>
        {/* <h3>child comp {data.id}</h3> */}
        </>
    )
}

export default Child
