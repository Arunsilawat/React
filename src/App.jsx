// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./Pages/Home";
// import Display from "./Pages/Display";
// import Contact from "./Pages/Contact";
// import Insert from "./Pages/Insert";
// import Search from "./Pages/Search";
// import Update from "./Pages/Update";



// const App=()=>{
//     return(
//         <>
//         <BrowserRouter>
//            <Routes>
//                <Route path="/" element={<Layout/>}>
//                 <Route index element={<Home/>} />
//                 <Route path="/home" element={<Home/>} />
//                 <Route path="/display" element={<Display/>} />
//                 <Route path="/contact" element={<Contact/>} />
//                 <Route path="/insert" element={<Insert/>} />
//                 <Route path="/search" element={<Search/>} />
//                 <Route path="/update" element={<Update/>}/>
//                </Route>
//            </Routes>
//         </BrowserRouter>
//         </>
//     )
// }
// export default App;
// ========================================end=========================================================
import { useState } from "react";
import Collage from "./Collage";

const App=()=>{
    const [mydata,setMydata]=useState("")
    setTimeout(()=>{
     setMydata(true)
    },3000)
// --------------------------------------------------
const subjects=["Java","Python","C++","Java script","Git","Html"]
    return(
        <>
        <Collage myVal={mydata}/>
{/* ---------------------------------------------------- */}
         {subjects.length>0 && 
         subjects.map((key)=>{
             return(
                <>
                <li>{key}</li>
                </>
             )
         })}
        </>
    )
}
export default App;