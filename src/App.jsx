// import { useState } from "react";
// const App=()=>{
//   const [input, setInput]=useState({});
//   const handleInput=(e)=>{
//        let name=e.target.name;
//        let value=e.target.value;
//        setInput(values=>({...values,[name]:value}));
//        console.log(input);
//   }
//   const handlesubmit=()=>{
//     console.log(input)  
//   }

import About from "./About";


//   return(
//     <>
//     Enter Empno  : <input type="text" name="empno" onChange={handleInput}/>
//     <br />
//     Enter Name   : <input type="text" name="name" onChange={handleInput}/>
//     <br />
//     Enter City   : <input type="text" name="city" onChange={handleInput} />
//     <br />
//     Enter Salary : <input type="text" name="salary" onChange={handleInput}/>
//     <br />
//     <button onClick={handlesubmit}>Save</button>
//     </>
//   )
// }
// export default App;
//----------------------------------------------------------------------------------------today
// import { useState,useEffect } from "react";
// const App=()=>{
//   const [cnt,setCnt]=useState(0);
//   useEffect(()=>{
//     setCnt(cnt+1)
//   },[])
//   return(
//     <>
//       <h1>Application Form :{cnt}</h1>
//     </>
   
//   )
// }
// export default App;



import { useState,useEffect } from "react";
const App=()=>{
  const [cnt,setCnt]=useState(0);
  const [multi,setMulti]=useState(1);
  useEffect(()=>{
    setMulti(cnt*2)
  },[cnt])
  return(
    <>
    <button onClick={()=>{setCnt(cnt+1)}}>Click Here</button>
      <h1>Application Form :{cnt}</h1>
      <h1>UseEffect :{multi}</h1>
    </>
   
  )
}
export default App;