import React, {Component} from "react";
import "../styles/NavBar.css";
import AboutApp from "./AboutApp";
import  RegistrationApp from "./RegistrationApp";
import  QuestionApp from "./QuestionApp";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
class NavBar extends Component{
    render(){
        return (
            <Router>
            <nav>
        
                 <ul aria-label="Основные разделы сайта">
            <li><Link to="/о нас">О нас</Link></li>
                     <li><Link to="/условия">Условия</Link></li>
         <li><Link to="/частые вопросы">Частые вопросы</Link></li>
    
                    
                 </ul>
              
             </nav>
      
            <Switch>
            <Route  path="/о нас">
            <AboutApp/>
            </Route>
             <Route  path="/условия">
            <RegistrationApp/>
            </Route>
            <Route  path="/частые вопросы">
            <QuestionApp/>
            </Route>
    
            </Switch>
            </Router>
          
        );
    }
}


export default NavBar;