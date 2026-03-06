import { useState } from "react";

function useCounter(ivalue=0){
    const[count,setCount]=useState(ivalue);

    const inc=()=>setCount(count=>count+1);
    const dec=()=>setCount(count=>count-1);

    return {count , inc, dec}
}

export default useCounter;