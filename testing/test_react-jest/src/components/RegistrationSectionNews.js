import React, {Component} from "react";
import  "../styles/RegistrationSectionNews.css";
import fast_car from '../images/Main/undraw_fast_car.png';


class RegistrationSectionNews extends Component{
    render(){
        return(
            <section className="registration-section-news">
             <div className="container-news">

             <img className="container-news__image_first" src={fast_car} alt="Первый рисунок блока  новостей"/>
                 <div className="container-news__flex">
            <h2 className="container-news__title-rent">Аренда напрямую от владельцев</h2>
            <p>Вы получите автомобиль от его собственника, а мы проверим юридическую чистоту и техническую исправность.</p>
                 </div>
             </div>
             </section>
        );
    }
}
export default RegistrationSectionNews;

