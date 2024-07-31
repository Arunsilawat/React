import axios from "axios";
import { useState } from "react";
const Search=()=>{
    const [search,setSearch]=useState({})
    const [rno,setRno]=useState("")
    const Search=(rno)=>{
        let api=`http://localhost:3000/ragesrer/?rollno=${rno}`
        axios.get(api,rno).then((res)=>{
            setSearch(res,data)
            console.log(res.data)
        })
    }
    return(
        <>
        <h1>Search Data</h1>
        Enter User Id : <input type="text" value={rno} onChange={(e)=>{setRno(e.target.value)}} />
        <button onClick={Search}>Search</button>
        </>
    )
}
export default Search;
