import axios from "axios";
import { useState } from "react";


const Insert=()=>{
    const [mydata,setMydata]=useState({})
    const handleinput=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setMydata(values=>({...values,[name]:value}))
    }
    const datasubmit=()=>{
        let url="http://localhost:3000/employee"
        axios.post(url,mydata).then((res)=>{
            alert("done")
        })
    }
    return(
        <>
        <h1>Insert Data..</h1>
        <hr />
        <form action="" style={{justifySelf:'center'}}>
            Id : <input type="text" name="emp_id" value={mydata.emp_id} onChange={handleinput}/><br /><br />
            Name : <input type="text" name="name" value={mydata.name} onChange={handleinput}/><br /><br />
            Department : <input type="text" name="department" value={mydata.department} onChange={handleinput}/><br /><br />
            Salary : <input type="text" name="salary" value={mydata.salary} onChange={handleinput}/><br /><br />
            <button onClick={datasubmit}>Submit</button>
        </form>
       
        </>
    )
}
export default Insert;