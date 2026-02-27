import React from 'react'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    const islogin = true;
    return (
        <>

        {islogin ? children : <Navigate to="/login"/>}
        
        </>
    )
}

export default PrivateRoute
