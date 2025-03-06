import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    {/* <React.StrictMode> */}
    <Route path='/' element={<App />}></Route>
    {/* </React.StrictMode> */}
  </Router>
);


