import React from "react";
import  "../styles/SectionNewsSecond.css";
import Vehicle from "../images/Main/undraw_Vehicle_sale.png";

function SectionNewsSecond (){
    return(
        <section className="section-news-second">
              <div className="container-news-direct">
             <img className="container-news__image_second" src={Vehicle} alt="Второй рисунок блока  новостей"/>
                   <div className="container-news__flex-reverse">
            <h2>Автомобили на любой вкус</h2>
            <p>Вы всегда можете подобрать автомобиль любого класса от бюджетных моделей до премиум класса и спорткаров.</p>
             </div>
             </div>
        </section>
    );
}
export default SectionNewsSecond;
