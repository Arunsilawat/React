
import { useContext } from "react";
import { courseContext } from "./App";
const Collage=()=>{
    const {course,setCourse}=useContext(courseContext)
    
    return(
        <>
        <h1>Collage : {course}</h1>
        <button onClick={()=>{setCourse("Dehli")}}>Click Here</button>
        </>
    )
}
export default Collage;