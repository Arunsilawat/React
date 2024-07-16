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
import Collage from "./Collage";
const App=()=>{
    return(
        <>
        <Collage myVal={false}/>
        </>
    )
}
export default App;