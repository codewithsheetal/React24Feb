import React, { act } from 'react'

export const intitalData = {
    count: 0,
    label:"Start Count"
}
function CounterReducer(state, action) {
    switch (action.type) {
        case "INC":
            return{
                count : state.count +1,
                label:"Incremented"
            }
        case "DEC":
            return{
                count : state.count -1,
                label:"decremented"
            }
        case "RESET":
            return{
                count : 0,
                label:"Reset"
            }
        case "INCBYFive":
            return{
                count : state.count + action.payload
            }
        default:
            return state;
    }

    return (
        <>
        </>
    )
}

export default CounterReducer
