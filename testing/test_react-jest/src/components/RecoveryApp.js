import React, {Component, Fragment} from "react";
import  '../styles/RecoveryApp.css';
import RecoveryHeader from "./RecoveryHeader";
import RecoverySection from "./RecoverySection";
import RecoveryFooter from "./RecoveryFooter";
 class RecoveryApp extends Component {
    render(){
        return (
          <Fragment>
          <RecoveryHeader/>
            <RecoverySection />
            <RecoveryFooter/>
      </Fragment>
        );
             
       
      
    }
}
 
export default RecoveryApp;