import { useState } from "react";

function useToggle(ivalue=false){
    const[value,setValue]= useState(ivalue);

    const toggle=()=>{
        setValue(value=> !value);
    }

    return [value, toggle]

}

export default useToggle;