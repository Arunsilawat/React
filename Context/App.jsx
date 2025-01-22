
import { useContext } from "react";
import { mycontext } from "./CourseComp";
const App=()=>{
   const {course,setMycourse}=useContext(mycontext)
   return(
      <>
      <h1>Context</h1>
      <h1>{course}</h1>
      <button onClick={()=>{setMycourse("Python")}}>Python</button>
      <button onClick={()=>{setMycourse("React")}}>React</button>
      <button onClick={()=>{setMycourse("DSA")}}>DSA</button>
      <button onClick={()=>{setMycourse("Javascript")}}>Javascript</button>

      </>
   )
}
export default App;