import React from "react";
import ReactDOM from "react-dom";
import MainApp from "./components/MainApp"; 

ReactDOM.render((
    <BrowserRouter>
    <MainApp/>
    </BrowserRouter>
    ), document.getElementById("root"));
