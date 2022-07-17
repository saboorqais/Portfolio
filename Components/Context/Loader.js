import React from "react";
import { useState } from "react";
import LoaderContext from "./LoaderContext";
const Loader = (props) => {



    const [Boolean, setBoolean] = useState(false)
    
    
    return (<LoaderContext.Provider value={{Boolean,setBoolean}}>
        {props.children}
    </LoaderContext.Provider>)


}

export default Loader