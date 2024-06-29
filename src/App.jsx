import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import About from "./Pages/About";
import NoPage from "./Pages/NoPage";
import Contact from "./Pages/Contact";

const App=()=>{
    return(
        <>
          <BrowserRouter>
             <Routes>
                  <Route path="/" element={<Layout/>}>
                       <Route index element={<Home/>}/>
                       <Route path="/home" element={<Home/>}/>
                       <Route path="/service" element={<Service/>}/>
                       <Route path="/about" element={<About/>}/>
                       <Route path="/contact" element={<Contact/>}/>
                       <Route path="*" element={<NoPage/>}/>
                  </Route>
             </Routes>
          </BrowserRouter>
        </>
    )
}

export default App;