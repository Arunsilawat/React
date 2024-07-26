import Layout from "./Layout";
import Home from "./Home";
import Login from "./Login";
import Registration from "./Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App=()=>{
    return(
        <> 
         <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Layout/>}> 
                 <Route index  element={ <Home/>}/>
                 <Route path="/home" element={ <Home/>}/>
                 <Route path="/registration" element={ <Registration/>}/>
                 <Route path="/login" element={ <Login/>}/>
                </Route>
            </Routes>
         </BrowserRouter>
        </>
    )
}
export default App;