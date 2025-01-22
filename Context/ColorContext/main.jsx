import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/style.css'
import ColorChange from './ColorChange.jsx';
 ReactDOM.createRoot(document.getElementById('root')).render(
    <ColorChange>
     <App/>
    </ColorChange>
    
)

