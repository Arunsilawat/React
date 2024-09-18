import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
const App = () => {
    const [mydata, setmydata] = useState([]);
    const datahandle = () => {
        let api = 'http://localhost:3000/student';
        axios.get(api).then((res) => {
            setmydata(res.data)
        })
    }
    useEffect(() => {
        datahandle();
    }, [])
    let sum=0;
    const ans = mydata.map((key) => {
        sum+=1
        return (
            <>
                <tr>
                    <td>{sum}</td>
                    <td>{key.name}</td>
                    <td>{key.age}</td>
                    <td>{key.city}</td>
                    <td>{key.class}</td>
                </tr>
            </>
        )
    })
    return (
        <>
            <h1>Welcome to Cybrom</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Class</th>
                    </tr>
                </thead>
                <tbody>
                    {ans}
                </tbody>
               </Table>
            </>
            )
}
            export default App;