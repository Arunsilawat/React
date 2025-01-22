import axios from "axios";
import { useState } from "react";
const Insert=()=>{
    const [mydata,setMydata]=useState({});
    const DataPost=()=>{
        let url="http://localhost:3000/cybrom";
        axios.post(url,mydata).then((res)=>{
            alert("Data Successfully Saveed")
        })
    }
    const datahandle=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setMydata(values=>({...values,[name]:value}));
    }
    return(
        <>
        <h1>Your Data </h1>
        Enter Roll No : <input type="text" name="rollno" value={mydata.rollno} onChange={datahandle} /><br /><br />
        Enter Name : <input type="text" name="name" value={mydata.name} onChange={datahandle} /><br /><br />
        Enter City No : <input type="text" name="city" value={mydata.city} onChange={datahandle} /><br /><br />
        Enter Fees : <input type="text" name="fees" value={mydata.fees} onChange={datahandle} /><br /><br />
        <button onClick={DataPost}>Save</button>

        </>
    )
}
export default Insert;