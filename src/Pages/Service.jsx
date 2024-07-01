

import { Link,Outlet } from "react-router-dom";




const Service=()=>{
    return(
        <>
         <h1>Our company Servise</h1>
          <table width="100%">
            <tr>
                <td width="20%" height="200">
                <Link to="companyservice">Company Service </Link>
                <br /><br />
                <Link to="productservice">Product Service </Link>
                <br /><br />
                <Link to="sellsservice">Sells Service </Link>
                <br /><br />
    
                </td>
                <td>
                    <Outlet/>
                </td>
            </tr>
          </table>
        </>
    )
}

export default Service;