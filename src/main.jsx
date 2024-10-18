import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/style.css'
import App from './App';
import { Provider } from 'react-redux';
import Store from './Store';
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
   <App />
    </Provider>
        
    
 )

