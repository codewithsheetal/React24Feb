import React from 'react'
import Styles from './Extra.module.css'

function ModuleCss() {
    return (
        <>
        <h1 className={Styles.heading1}>Module css</h1>
        <h2 className={`${Styles.heading1} ${Styles.title}`}>Module css multiple classes</h2>
        </>
    )
}

export default ModuleCss
