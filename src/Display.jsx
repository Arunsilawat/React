import axios from "axios";
import { useEffect, useState } from "react";

 

 const Display=()=>{
    const [mydata,setMydata]=useState([])
    const [edit,setMyedit]=useState({})
    const loaddata=()=>{
        let url="http://localhost:3000/employee"
        axios.get(url).then((res)=>{
            setMydata(res.data)
        })
    }
    useEffect(()=>{
        loaddata()
    },[])
    const datadelete=(id)=>{
        let url=`http://localhost:3000/employee/${id}`
        axios.delete(url).then((res)=>{
            alert("Deleted")
            loaddata()
        })
    }
    const dataedit=(id)=>{
       let url=`http://localhost:3000/employee/${id}`
       axios.get(url).then((res)=>{
           setMyedit(res.data)
       })
    }
    const handleinput=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setMyedit(values=>({...values,[name]:value}))
    }
    const datasubmit=()=>{
        let url=`http://localhost:3000/employee/${edit.id}`
        axios.put(url,edit).then((res)=>{
            alert("Updated")
        })
    }
    let ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.emp_id}</td>
                <td>{key.name}</td>
                <td>{key.department}</td>
                <td>{key.salary}</td>
                <td>
                    <a href="#">
                        <button onClick={()=>{datadelete(key.id)}}>Delete</button>
                    </a>
                </td>
                <td>
                    <a href="#">
                        <button onClick={()=>{dataedit(key.id)}}>Edit</button>
                    </a>
                </td>
            </tr>
            </>
        )
    })
    return(
        <>
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Delete</th>
            </tr>
            {ans}
        </table>
        {/* ---------------- */}
        <h1>------   Updates ------</h1>
        <form action="" style={{justifySelf:'center'}}>
            Id : <input type="text" name="emp_id" value={edit.emp_id} onChange={handleinput}/><br /><br />
            Name : <input type="text" name="name" value={edit.name} onChange={handleinput}/><br /><br />
            Department : <input type="text" name="department" value={edit.department} onChange={handleinput}/><br /><br />
            Salary : <input type="text" name="salary" value={edit.salary} onChange={handleinput}/><br /><br />
            <button onClick={datasubmit}>Submit</button>
        </form>
        </>
    )
 }
export default Display;