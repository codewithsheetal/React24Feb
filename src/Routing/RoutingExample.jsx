import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
// import About from './About'
import Inlinecss from '../cssconcept/inlinecss'
import Home from './Home'
import Layout from './Layout'
import Login from './Private/Login'
import PrivateRoute from './Private/PrivateRoute'
import Display from './Private/Display'
import DynamicRouting from './DynamicRouting'

const About = React.lazy(()=>import("./About"))

function RoutingExample() {
    return (
        <>
            <Suspense fallback={<h1>loading </h1>}>
                <Routes>
                    <Route path="/hello" element={<h1>hello this is hello route</h1>} />
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/multi" element={
                        <>
                            <About />
                            <Inlinecss />
                        </>
                    } />

                    {/* nested Routing  */}
                    <Route path="/layout" element={<Layout />}>
                        <Route path="dashboard" element={<h1> dashboard</h1>} />
                    </Route>

                    {/* private  */}

                    <Route path="/login" element={<Login />} />
                    <Route path="/display" element={
                        <PrivateRoute>
                            <Display />
                        </PrivateRoute>
                    } />

                    {/* dynamic Routing  */}

                    <Route path="product/:id" element={<DynamicRouting />} />
                </Routes>
            </Suspense>

        </>
    )
}

export default RoutingExample
