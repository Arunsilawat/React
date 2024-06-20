
import Header from "./Header";
import Footer from "./Footer";
import Data from "./Data";
import Employee from "./Employee";
import Collage from "./Collage";
import Cybrom from "./Cybrom";



//---------------collage--------------

// const nm="Sachin";
// const clg="Mtech";
// const fees=30000;

// const App=()=>{
//   return(
//     <>
//      <Collage nm={nm} clg={clg} fee={fees}/>
//     </>
  
//   )
// }
// export default App;


//----------------------------------------------
// const student={
//   "rollnum":121,
//   "name":"Arun",
//   "city":"Bhopal"
// }

// const App=()=>{
//   return(
//     <>
//     <Cybrom roll={student.rollnum} nm={student.name} ct={student.city}/>
//     </>
  
//   )
// }
// export default App;

//------------------------------map-------------

// const App=()=>{
//   const name=["ram","syaam","mohan","Arun"];
//   const ans=name.map((key)=>{
//     return(
//       <>
//       <h1>{key}</h1>
//       </>
//     )
//   })
//   return(
//     <>
//     {ans}
//     </>
  
//   )
// }
// export default App;
//----------------------------------------------------
// const age=[23,343,33,35,67,8,98];
// const myage=age.map((key)=>{
//   return(
//     <>
//     <h1>{key*2}</h1>
//     </>
//   )
// })

// const App=()=>{
//   return(
//     <>
//     {myage}
//     </>
  
//   )
// }
// export default App;
//-----------------------------

// const city=["Bhopal","Indore","Jabalpur","Ujjain","Gwaliyar"];
// const mycity=city.map((key)=>{
//   return(
//     <>
//     <option>{key}</option>
//     </>
//   )
// })
// const App=()=>{
//   return(
//     <>
//     <select>
//       {mycity}
//     </select>
//     </>
  
//   )
// }
// export default App;

const subject=["java","c++","Python","React","pd","Html"];
const App=()=>{

   const mysub=subject.map((key)=>{
    return(
      <>
      <li>{key}</li>
      </>
    )
   })
  return(
    <>
     <ul>{mysub}</ul>
    </>
  
  )
}
export default App;