
import { Link,Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
         <Link to="home"> Home |</Link>
         <Link to="contact"> Contact |</Link>
         <Link to="about"> About </Link>

         <Outlet/>
        </>
       
    )
}
export default Layout;