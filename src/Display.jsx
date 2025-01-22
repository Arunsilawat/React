import axios from "axios";
import { useEffect, useState } from "react";


const Display=()=>{
    const [data,setMydata]=useState([]);
    const [edit,setMyedit]=useState({});

    const datadisplay=()=>{
        let url="http://localhost:3000/cybrom"
        axios.get(url).then((res)=>{
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        datadisplay()
    })
    const deldata=(id)=>{
      let url=`http://localhost:3000/cybrom/${id}`
      axios.delete(url).then((res)=>{
        alert("Deleted !")
      })
    }
    const editdata=(id)=>{
     let url=`http://localhost:3000/cybrom/${id}`
     axios.get(url).then((res)=>{
        setMyedit(res.data)
     })
    }
    const editmanage=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setMyedit(values=>({...values,[name]:value}))
    }
    const editsave=()=>{
        let url=`http://localhost:3000/cybrom/${edit.id}`
        axios.put(url,edit).then((res)=>{
            alert("Updated !")
        })
    }
   
 
    const ans=data.map((key)=>{
        return(
            <>
            <tr style={{border:'2px solid black'}}>
                <td style={{border:'2px solid black'}}>{key.rollno}</td>
                <td style={{border:'2px solid black'}}>{key.name}</td>
                <td style={{border:'2px solid black'}}>{key.city}</td>
                <td style={{border:'2px solid black'}}>{key.fees}</td>
                <td>
                <a href="#">
                <button style={{width:'150px' }} onClick={()=>{deldata(key.id)}}>Delete</button>
                </a>
                <a href="#">
                <button style={{width:'150px'}} onClick={()=>{editdata(key.id)}}>Edit</button>
                </a>
                </td>
            </tr>

            </>
        )
    })
    return(
        <>
        <h1>Display</h1>
        <table style={{justifySelf:'center',width:'80%'}}>
            <tr style={{border:'2px solid black',textAlign:'center'}}>
                <td style={{border:'2px solid black'}}>Roll No</td>
                <td style={{border:'2px solid black'}}>Name</td>
                <td style={{border:'2px solid black'}}>City</td>
                <td style={{border:'2px solid black'}}>Fees</td>
                <td style={{border:'2px solid black',textAlign:'center',width:'100px'}}>Updates</td>

            </tr>
            {ans}
        </table><br /><br />
        Roll No : <input type="text" value={edit.rollno} name="rollno" onChange={editmanage}/>
        Name : <input type="text" value={edit.name} name="name" onChange={editmanage}/>
        City : <input type="text" value={edit.city} name="city" onChange={editmanage}/>
        Fees : <input type="text" value={edit.fees} name="fees" onChange={editmanage}/>
        <button onClick={editsave}>Edit Save</button><br />
         
        </>
    )
}
export default Display;