import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainRoutes from './routes';

export default function App() {
  return(
    <BrowserRouter basename='/api/'>
      <MainRoutes/>
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));

reportWebVitals();