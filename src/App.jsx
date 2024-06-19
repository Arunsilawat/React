
import Header from "./Header";
import Footer from "./Footer";
import Data from "./Data";
import Employee from "./Employee";
import Collage from "./Collage";



// react components----------------------------
// const App=()=>{
//   return(
//     <>
//      {/* <h1>Welcome To Cybrom Bhopal</h1>
//      <h1>This is a first page</h1> */}
//      {/* <Cybrom/> */}
//      <Header/>
//      <Middle/>
//      <Footer/>
//     </>
  
//   )
// }
// export default App;
//---------------------------------------------------
// const age =29;
// const name="Arun";
// const App=()=>{
//   return(
//     <>
//      <h1>hello i am {name} i am {age*2} year old</h1>
//     </>
  
//   )
// }
// export default App;
//-----------------------------------------------------------------

// const sub = <ul>
//     <li>PHP</li>
//     <li>Hava</li>
//     <li>Asp</li>
//     <li>Oracle</li>
// </ul>
// const App=()=>{
//   return(
//     <>
//      <h1><h1>Hello my sub is :{sub}</h1></h1>
//     </>
  
//   )
// }
// export default App;
//------------------------------------------------------------
 
 
// const App=()=>{
//   return(
//     <>
//     <h1>Application from</h1>
//     Enter Name: <input type="text" />
//     <br />
//     Enter City: <input type="text" />
//     </>
//   )
// }
// export default App;
//----------------------------------------------------------------
//========================component==============================
  
// const App=()=>{
//   return(
//     <>
//      <Header/>
//      <Data/>
//      <Footer/>
//     </>
  
//   )
// }
// export default App;

//----------------employeeeee-------------
// const App=()=>{
//   return(
//     <>
//      <Employee nm="Arun" num="E233" sal="60000"/>
//     </>
  
//   )
// }
// export default App;
//---------------collage--------------

const nm="Sachin";
const clg="Mtech";
const fees=30000;

const App=()=>{
  return(
    <>
     <Collage nm={nm} clg={clg} fee={fees}/>
    </>
  
  )
}
export default App;