import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/style.css'
import CourseComp from './CourseComp.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
    <CourseComp>
        <App/> 
    </CourseComp>
  
)

