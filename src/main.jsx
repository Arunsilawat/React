import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/style.css'
import Store from './Store';
import { Provider } from 'react-redux';
import App from './App';
    ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
   <App />
    </Provider>
   )

