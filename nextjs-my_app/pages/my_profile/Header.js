import Image from 'next/image';
import logo from '../../public/images/SkillDrive.png';
import  Vector_menu from '../../public/images/vector-menu.png';
import heading from '../../styles/Header.module.css';
import logo_styles from '../../styles/Header.module.css';
import Navigation from './Navigation.js';
export default function Header (){
   return(
        <header className={heading.heading}>
         <a href="#"><Image src={logo} alt="Логотип сайта" className={logo_styles.logo}/></a>
		 <Navigation/>
        <Image src={Vector_menu} alt="Иконка меню" className="vector-menu"/>
    </header> 
        );
    
}