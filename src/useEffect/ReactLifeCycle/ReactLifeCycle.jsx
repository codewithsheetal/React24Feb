import React, { useEffect, useState } from 'react'

function ReactLifeCycle() {
    //mount :- comp is created , add to Dom 
    //update:- comp re-render
    //unmount :- comp removed from Dom
    useEffect(() => {
        //write code which you want to run when comp mount
        console.log("child mount");
        const timer = setInterval(() => {
            console.log("runnning");

        })

        return () => {
            //cleanup
            //write code which you want to run when comp unmount

            console.log("child unmount");
            clearInterval(timer)

        }
    }, [])

    return (
        <>
            <h1>react life cycle </h1>
        </>
    )
}

export default ReactLifeCycle
