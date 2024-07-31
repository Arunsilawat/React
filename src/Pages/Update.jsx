import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
const Update = () => {
    const [mydata, setMydata] = useState([]);
    const handledata = () => {
        let api = "http://localhost:3000/ragesrer"
        axios.get(api).then((res) => {
            setMydata(res.data)
        })
    }
    useEffect(() => {
        handledata()
    }, [])
    const mydelete=(myid)=>{
     let url=`http://localhost:3000/ragesrer/?id=${myid}`
     axios.delete(url).then((res)=>{
        alert("Data Deleted")
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
                    <a href="#">
                    <td style={{backgroundColor:"pink",border:"2px solid white",borderRadius:"30px"}} >Edit</td>
                    </a>
                    <a href="#">
                    <td style={{backgroundColor:"pink",border:"2px solid white",borderRadius:"30px"}} onClick={()=>{mydelete(myid)}}>Delete</td>                    </a>
                    
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
        </>
    )
}
export default Update;
