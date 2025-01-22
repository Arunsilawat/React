import { useContext } from "react";
import { mycontext } from "./ColorChange";
const App=()=>{
   const {color,setMycolor}=useContext(mycontext);
   return(
      <>
      <h1>Color Change</h1>
      <div style={{border:"2px solid black",width:'500px',height:'400px',background:color}}></div>
      <button onClick={()=>{setMycolor("red")}}>Red</button>
      <button onClick={()=>{setMycolor("Green")}}>Green</button>
      <button onClick={()=>{setMycolor("Yellow")}}>Yellow</button>
      <button onClick={()=>{setMycolor("Pink")}}>Pink</button>

      </>
   )
}
export default App;