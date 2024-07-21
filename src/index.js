import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PartTime from './component/CV/PartTime';
import Developer from './component/CV/Developer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    {/* <App /> */}
    <Routes>
      <Route path='/'>
        <Route index element={ <App />}></Route>
        <Route path='PartTime' element={ <PartTime /> }></Route>
        <Route path='Developer' element={ <Developer /> }></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
