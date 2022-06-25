import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter} from 'react-router-dom';
import Protected from "./routes/Protected"
import Race from "./Race"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
       <App />
      {/* <Protected /> */}
      {/* <Race/> */}
  </BrowserRouter>,
  document.getElementById('root')  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();