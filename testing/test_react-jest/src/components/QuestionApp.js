import React, {Component, Fragment} from "react";
import '../styles/QuestionApp.css';
import Header from "./Header";
import Footer from "./Footer";
import SectionMain from "./SectionMain";
import QuestionsFAQ from "./QuestionsFAQ"
 class QuestionApp extends Component {
    render(){
        return (
          <Fragment>
           <Header />
          <SectionMain/>
            <QuestionsFAQ/>
            <Footer/>
      </Fragment>
        );
             
       
      
    }
}
 
export default QuestionApp;