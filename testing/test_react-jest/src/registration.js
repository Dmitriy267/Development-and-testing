import React from "react";
import ReactDOM from "react-dom";
import  RegistrationApp from "./components/RegistrationApp"; 
import {BrowserRouter} from 'react-router-dom';
ReactDOM.render(
    <BrowserRouter>
    <RegistrationApp/>
    </BrowserRouter>,
    document.getElementById("root"));