
import React from "react";
import ReactDOM from "react-dom";
import AboutApp from "./components/AboutApp"; 
import {BrowserRouter} from 'react-router-dom';
ReactDOM.render(
     <BrowserRouter>
    <AboutApp/>
       </BrowserRouter>,
     document.getElementById("root"));


