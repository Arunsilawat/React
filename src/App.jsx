import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import CartProduct from "./Pages/CartProduct";
 
 const App=()=>{
   return(
      <>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path="home" element={<Home/>}/>
         <Route path="shop" element={<Shop/>}/>
         <Route path="blog" element={<Blog/>}/>
         <Route path="contact" element={<Contact/>}/>
         <Route path="about" element={<About/>}/>
         <Route path="cartproduct" element={<CartProduct/>}/>
         </Route>
      </Routes>
      </BrowserRouter>
      
      </>
   )
}
export default App;