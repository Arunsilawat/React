import { Outlet } from "react-router-dom";
import NavbarComp from "./Pages/Navbar";
import Footer from "./Pages/Footer";


const Layout=()=>{
    return(
       <>
       <NavbarComp/>
       <Outlet/>
       <Footer/>
       </>
    )
 }
 export default Layout;