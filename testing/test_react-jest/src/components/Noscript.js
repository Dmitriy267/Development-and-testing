import React from "react";
import "../styles/Noscript.css";

function Noscript (){
    return (
    <noscript className="not_js">
         <p lang="ru" className="noscript_qustion">Могу ли я отменить бронь?</p>
            <p lang="en" className="noscript_answer">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </noscript>
    );
}

export default Noscript;