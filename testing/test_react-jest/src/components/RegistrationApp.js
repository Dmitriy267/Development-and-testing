import React, {Component, Fragment} from "react";
import '../styles/RegistrationApp.css';
import Header from "./Header";
import Footer from "./Footer";
import RegistrationSection from "./RegistrationSection"; 
import  RegistrationSectionNews from "./RegistrationSectionNews";
import  SectionNewsSecond from "./SectionNewsSecond";
import   SectionNewsThird from "./SectionNewsThird";
import   RegistrationSectionColor from "./RegistrationSectionColor";
import   RegistrationSectionOffers from "./RegistrationSectionOffers";
import   RegistrationSectionReviews from "./RegistrationSectionReviews";
import    RegistrationSectionLast from "./RegistrationSectionLast";
class RegistrationApp extends Component {
    render(){
        return (
          <Fragment>
           <Header />
          <RegistrationSection/>
            <RegistrationSectionNews/>
            <SectionNewsSecond/>
            <SectionNewsThird/>
            <RegistrationSectionColor/>
            <RegistrationSectionOffers/>
            <RegistrationSectionReviews/>
            <RegistrationSectionLast/>
            <Footer/>
      </Fragment>
        );
             
       
      
    }
}

export default RegistrationApp;