import { useNavigate } from "react-router-dom";


const Contact=()=>{
    const navigate=useNavigate();
     const goto=()=>{
        navigate("/about")
     }
    return(
        <>
        <h1>Contact</h1>
        <button onClick={goto}>About</button>
        </>
    )
}
export default Contact;