

const subject=["java","c++","Python","React","pd","Html"];
const App=()=>{

   const mysub=subject.map((key)=>{
    return(
      <>
      <li>{key}</li>
      </>
    )
   })
  return(
    <>
     <ul>{mysub}</ul>
    </>
  
  )
}
export default App;