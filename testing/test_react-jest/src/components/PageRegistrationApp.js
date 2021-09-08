import React, {Component, Fragment} from "react";
import '../styles/PageRegistrationApp.css';
import Header from "./Header";
import SectionsRegistrationMain from "./SectionsRegistrationMain";
import  RegistrationFooter from "./RegistrationFooter";
class PageRegistrationApp extends Component {
    render(){
        return (
          <Fragment>
           <Header />
        <SectionsRegistrationMain/>
            <RegistrationFooter/>
      </Fragment>
        );
             
       
      
    }
}
 
export default PageRegistrationApp;