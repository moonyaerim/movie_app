import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Router } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename={`${process.env.PUBLIC_URL}`}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Router>
);


