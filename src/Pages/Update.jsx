import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';


const Update = () => {
    const [mydata, setMydata] = useState([])
    const handledata = () => {
        let url = "http://localhost:3000/cybrom"
        axios.get(url).then((res) => {
            setMydata(res.data)
        })
    }
    useEffect(() => {
        handledata()
    }, [])
    const ans = mydata.map((key) => {
        return (
            <>
                <tr>
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.fees}</td>
                </tr>
            </>
        )
    })
    return (
        <>
            <h1>Update</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Fees</th>
                        <th>
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </th>
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