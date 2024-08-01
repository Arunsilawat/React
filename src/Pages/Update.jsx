import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
const Update = () => {
    const [mydata, setMydata] = useState([]);
    const [editdata,setEditdata]=useState({})
    const handledata = () => {
        let api = "http://localhost:3000/ragesrer"
        axios.get(api).then((res) => {
            setMydata(res.data)
        })
    }
    useEffect(() => {
        handledata()
    }, [])
    const mydelete=(id)=>{
     let url=`http://localhost:3000/ragesrer/${id}`
     axios.delete(url).then((res)=>{
        alert("Data Deleted")
        handledata()
     })
    }
    const UpdateData=()=>{
         let url=`http://localhost:3000/ragesrer/${editdata.id}`
         axios.put(url,editdata).then(()=>{
            alert("Data Updated")
            handledata()
         })
    }
    
    const myedit=(id)=>{
        let url=`http://localhost:3000/ragesrer/${id}`
        axios.get(url).then((res)=>{
            setEditdata(res.data)
            handledata()
        })
       }   
    const ans = mydata.map((key) => {
        return (
            <>
                <tr>
                    <td>{key.userid}</td>
                    <td>{key.name}</td>
                    <td>{key.email}</td>
                    <td>{key.pass}</td>
                    <td>{key.repass}</td>
                    <td style={{backgroundColor:"pink",border:"2px solid white",borderRadius:"30px"}} onClick={()=>{myedit(key.id)}} >Edit</td>
                    <td style={{backgroundColor:"pink",border:"2px solid white",borderRadius:"30px"}} onClick={()=>{mydelete(key.id)}}>Delete</td>
                </tr>
            </>
        )
    })
    return (
        <>
            <h1>Our Data Display</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Pass</th>
                        <th>Repass</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {ans}
                </tbody>
            </Table>


        Enter User Id :<input type="text" value={editdata.userid} onChange={(e)=>{setEditdata(e.target.value)}} /> <br /><br />
        Enter Name : <input type="text " value={editdata.name} onChange={(e)=>{setEditdata(e.target.value)}} /><br /><br />
        Enter Email:<input type="email" value={editdata.email}onChange={(e)=>{setEditdata(e.target.value)}} /> <br /><br />
        Enter Pass : <input type="text" value={editdata.pass} onChange={(e)=>{setEditdata(e.target.value)}} /><br /><br />
        Enter Re-Pass Id :<input type="text" value={editdata.repass} onChange={(e)=>{setEditdata(e.target.value)}} /> <br /><br />
        <button onClick={UpdateData}>Update</button>
        </>
    )
}
export default Update;
