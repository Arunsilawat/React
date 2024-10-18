

import { useSelector,useDispatch } from "react-redux";
import { increment,dicrement } from "./CounterSlice";

const App=()=>{
   const result=useSelector((state)=>state.mycounter.cnt)
   const mydic=useDispatch();
   return(
      <>
      <h1>..... Counter .....</h1>
      <h1>{result}</h1>
      <button onClick={()=>{mydic(increment())}}>Increment</button>
      <button onClick={()=>{mydic(dicrement())}}>Dicrement</button>
      </>
   )
}
export default App;