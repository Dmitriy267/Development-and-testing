import React from "react";
import  "../styles/RegistrationSectionLast.css";
import  toy_car from "../images/Main/undraw_toy_car.png";

function RegistrationSectionLast (){
    return(
         <section className="registration-section"> 
            <img src={toy_car} alt="Картинка" className="registration-section__picture"/>
            <h2 className="registration-section__title_last">Попробуйте аренду на себе </h2>
             <button className="registration-section__btn_last">Зарегистрироваться</button>
        </section>
    );
}
export default RegistrationSectionLast;

