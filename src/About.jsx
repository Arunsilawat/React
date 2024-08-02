
import { useNavigate } from "react-router-dom";
const About=()=>{
    const Navigate=useNavigate();
    
        setTimeout(()=>{
            Navigate("/home")
        },5000)
    
    return(
        <>
        <h1>About</h1>
        </>
    )
}
export default About;