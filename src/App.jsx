// import { useState,useEffect } from "react";
// import axios from "axios";

import axios from "axios";
import Product from "./Product";


// const App=()=>{
//     const [mydata, setMydata]=useState([]);
//     const loadData=()=>{
//         let url="https://jsonplaceholder.typicode.com/todos/";
//         axios.get(url).then((res)=>{
//         setMydata(res.data)
//         });
//     }
//     useEffect(()=>{
//         loadData();
//     },[])
//     let status="";

//     const ans=mydata.map((key)=>{
//         if(key.complated==true){
//             status="True"
//         }
//         else{
//             status="False"
//         }
//         return(
//             <>
//          <tr style={{border:'2px solid black'}}>
//             <td style={{border:'2px solid black'}}>{key.userId}</td>
//             <td style={{border:'2px solid black'}}>{key.id}</td>
//             <td style={{border:'2px solid black'}}>{key.title}</td>
//             <td style={{border:'2px solid black'}}>{status}</td>
//         </tr>
//             </>
//         )
//     })


//     return(
//         <>
//         <h1>Welcome to Cybrom</h1>
//         <table style={{backgroundColor:'pink',border:'2px solid black'}}>
//             <tr style={{border:'2px solid black'}}>
//             <th style={{border:'2px solid black'}}>User ID</th>
//             <th style={{border:'2px solid black'}}>ID</th>
//             <th style={{border:'2px solid black'}}>Title</th>
//             <th style={{border:'2px solid black'}}>Complated</th>
//             </tr>
//                 {ans}
//         </table>
//         </>
//     )
// }
// export default App;
//------------------------------------------------------
// import { useState,useEffect } from "react";
// import Table from 'react-bootstrap/Table';

// import axios from "axios";
// const App=()=>{
//     const [mydata,setMydata]=useState([]);
//      const loadData=()=>{
//        let api= "http://localhost:3000/student";
//        axios.get(api).then((res)=>{
//             setMydata(res.data)
//        });
//      }
//      useEffect(()=>{
//       loadData()
//      },[])

//     const ans=mydata.map((key)=>{
//         <tr>
//             <td>{key.rollno}</td>
//             <td>{key.name}</td>
//             <td>{key.city}</td>
//             <td>{key.fees}</td>
//         </tr>
//     })
//     return(
//         <>
//            <table>
//             <tr>
//                 <th>Roll No</th>
//                 <th>Name</th>
//                 <th>City</th>
//                 <th>Fees</th>
//             </tr>
//              {ans}
//            </table>
//         </>
//     )
// }
// export default App;


  
const box1={
    backgroundColor:'pink',
    width: '300px',
    height: '200px',
    border:'2px solid black',
    borderRadius:'30px',
    margin: 'auto',
   
    
 }
 const box2={
    backgroundColor:'green',
    width: '240px',
    height: '160px',
    border:'2px solid black',
    borderRadius:'30px',
    margin: 'auto',
     marginTop: 15
  
 }
 const box3={
    backgroundColor:'yellow',
    width: '200px',
    height: '100px',
    border:'2px solid black',
    borderRadius:'30px',
    margin: 'auto',
     marginTop: 25
 }
 const box4={
    width: '70px',
    margin: 'auto',
    marginTop: 27,
    
 }

const App=()=>{
    return(
        <>
        <div  style={box1}>
             <div style={box2}>
                <div style={box3}>
                    <div style={box4}>CYBROM</div>
                </div>
             </div>
        </div>
        </>
    )
}
export default App;
