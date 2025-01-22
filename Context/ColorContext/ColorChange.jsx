import { createContext } from "react";
import { useState } from "react";
const mycontext=createContext();
const ColorChange=({children})=>{
    const [color,setMycolor]=useState("yellow");
return(
    <>
     <mycontext.Provider value={{color,setMycolor}}>
     {children}
     </mycontext.Provider>
    </>
)
}
export default ColorChange;
export {mycontext};