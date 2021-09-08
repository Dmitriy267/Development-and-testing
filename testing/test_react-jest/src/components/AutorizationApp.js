import React, {Component, Fragment} from "react";
import  '../styles/AutorizationApp.css';
import HeaderAutorization from "./HeaderAutorization";
import AutorizationSection from "./AutorizationSection";

const ACSES_TOKEN_KEY="acsesToken";
class AutorizationApp extends Component{
 
    render(){
       localStorage.setItem(ACSES_TOKEN_KEY,"some_token")
        const token = localStorage.getItem(ACSES_TOKEN_KEY)
        console.log(token)
        return(
            <Fragment>
            <HeaderAutorization/>
             <AutorizationSection/>
            </Fragment>
        );
    }
}
export default AutorizationApp;


