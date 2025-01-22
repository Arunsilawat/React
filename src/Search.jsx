import axios from "axios";
import { useState } from "react";


const Search=()=>{
    const [mydata,setMydata]=useState([]);
    const [roll,setMyroll]=useState("")
    const SearchData=()=>{
        let url=`http://localhost:3000/cybrom/?rollno=${roll}`
        axios.get(url).then((res)=>{
            setMydata(res.data)
        })
    }
   const ans=mydata.map((key)=>{
    return(
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
    return(
        <>
        <h1>Search</h1>
        Enter Roll No : <input type="text" name="rollno" value={roll} onChange={(e)=>{setMyroll(e.target.value)}} />
        <button onClick={SearchData}>Search</button>
        <hr />
        <table>
            <tr>
                <td>Roll No</td>
                <td>Name</td>
                <td>City</td>
                <td>Fees</td>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Search;