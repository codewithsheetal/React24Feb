import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <h1> home page</h1>

            <Link to="/about">About</Link> ||
            <Link to="/multi">InlineCss</Link>
        </>
    )
}

export default Home
