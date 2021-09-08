import React from "react";
import "../styles/RegistrationSection.css";
import  driver from '../images/Main/undraw_city_driver_jh2h_max.png';
function RegistrationSection (){
    
    
    return (
        <section className="registration-section">
            <img className="registration-section__images_size" src={driver} alt="Рисунок главной страницы по каршерингу"/>
            <h1 className="registration-section__title">Каршеринг в любой точке России</h1>
            <p className="registration-section__text">Будьте всегда за рулём во время путешествий и командировок.</p>
            <button className="registration-btn" >Зарегистрироваться</button>
        </section>
    )
}
export default RegistrationSection;

