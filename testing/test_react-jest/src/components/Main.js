import React from "react";
import  "../styles/Main.css"
import img_about from "../images/img_about.png"
 function Main () {
     return (
    <main>
          <img src={img_about} alt="Изображение главной страницы" className="vector-image" />
          
    <h1 className="about">О нас</h1>
    <p className="textL">Это учебный проект, созданный с целью получения боевого опыта в разработке настоящего живого веб-приложения. Этот сервис имитирует работу каршеринга, в котором можно не только арендовать автомобили, но и сдавать их в аренду.</p>
    </main>
 );
 }
export default Main;