import React, {Component, Fragment} from "react";
import  '../styles/MainApp.css';
import Header from "./Header";
import RegistrationSection from "./RegistrationSection";
import AboutApp from "./AboutApp";
import  RegistrationApp from "./RegistrationApp";
import  QuestionApp from "./QuestionApp";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
class MainApp extends Component {
    render(){
        return (
          <Fragment>
           <Header />
            <Router>
            <Link to="/условия">Условия</Link>
            <Link to="/частые вопросы">Частые вопросы</Link>
            <Link to="/о нас">О нас</Link>
                <Switch>
                    <Route path="/частые вопросы" component={QuestionApp}/>
                    <Route path="/о нас" component={AboutApp}/>
                    <Route path="/условия" component={RegistrationApp} />
                  
                </Switch>
</Router>
            
         <RegistrationSection/>
           
      </Fragment>
        );
             
       
      
    }
}
 
export default MainApp;