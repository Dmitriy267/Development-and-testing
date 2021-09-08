import React from "react";
import ReactDOM from "react-dom";
import  RoutingApp from "./components/RoutingApp"; 
import {BrowserRouter} from 'react-router-dom';
ReactDOM.render((
    <BrowserRouter>
    <RoutingApp/>
    </BrowserRouter>
    ), document.getElementById("root"));