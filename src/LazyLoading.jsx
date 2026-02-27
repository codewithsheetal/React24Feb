import React, { Suspense } from 'react'
// import About from './Routing/About'

const About = React.lazy(()=>import("./Routing/About"))

function LazyLoading() {
    return (
        <>
        <Suspense fallback={<h2> loading</h2>}>
        <About/>
        </Suspense>
        {/* <Suspense fallback={<h2> loading</h2>}>
        <About/>
        </Suspense> */}
        </>
    )
}

export default LazyLoading
