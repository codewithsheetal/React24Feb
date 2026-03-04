import React, { createContext } from "react";

const SeparateContext = createContext();

export function SeparateProvider({children}){
    return(
        <>
            <SeparateContext.Provider value="qwe">
                {children}
            </SeparateContext.Provider>
        </>
    )
}

export default SeparateContext;