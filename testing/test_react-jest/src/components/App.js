import React, {Component, Fragment} from "react";
import  '../styles/App.css';
import Header from "./Header";
import Main from "./Main";
import Contacts from "./Contacts";
import Commands from "./Commands";
import Footer from "./Footer";
 class App extends Component {
    render(){
        return (
          <Fragment>
           <Header />
            <Main/>
            <Contacts/>
            <Commands/>
            <Footer/>
      </Fragment>
        );
             
       
      
    }
}
 
export default App;