import { useContext } from "react";
import { myLoginContext } from "./LoginContext";
import UnauthUser from "./UnauthUser";
import AuthUser from "./AuthUser";
const App=()=>{
    const {user}=useContext(myLoginContext)
    return(
        <>
        <h1>My Login App</h1>
       
         {user.auth ?  <AuthUser/> : <UnauthUser/>}
        </>
    )
}
export default App;