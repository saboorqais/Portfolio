import React from "react";
import { useState } from "react";
import StateContext from "./StateContext";
const StateMenu = (props) => {



    const [Boolean, setBoolean] = useState(false)
    
    
    return (<StateContext.Provider value={{Boolean,setBoolean}}>
        {props.children}
    </StateContext.Provider>)


}

export default StateMenu