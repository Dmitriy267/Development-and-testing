import React, {Component} from "react";
import  "../styles/Header.css";
import logo from '../images/SkillDrive.png';
import icons_menu from "../images/icons/Vector-menu.png";
import NavBar from "./NavBar.js";
import EntranceButton from "./EntranceButton.js"
class Header extends Component{
    render (){
        return(
          <header className="heading">
          <a href="#"><img src={ logo } alt="Логотип сайта" className="logo" /></a>
             <div className="navigation">
             <NavBar/>
           
      <EntranceButton/>
             </div>
     
       <img src={icons_menu} alt="Иконка меню" className="vector-menu" />
        </header>   
        );
    }
}

export default Header;