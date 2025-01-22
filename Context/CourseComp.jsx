import { createContext } from "react";
import { useState } from "react";
const mycontext=createContext();
const CourseComp=({children})=>{
    const [course,setMycourse]=useState("Java")
    return(
        <>
       <mycontext.Provider value={{course,setMycourse}}>
        {children}
       </mycontext.Provider>
        </>
    )
}
export default CourseComp;
export {mycontext};