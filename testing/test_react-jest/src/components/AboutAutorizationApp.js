mport React, {Component, Fragment} from "react";
import  '../styles/AboutAutorizationApp.css';
import Header from "./Header";
import RegistrationSection from "./RegistrationSection";

class AboutAutorizationApp extends Component {
    render(){
        return (
          <Fragment>
           <Header />
         <RegistrationSection/>
           
      </Fragment>
        );
             
       
      
    }
}
 
export default AboutAutorizationApp;