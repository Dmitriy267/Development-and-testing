import React, {Component} from "react";
import  "../styles/RegistrationSectionReviews.css";
import chevron_left from "../images/icons/chevron-left.png";
import client from "../images/Main/client.png";
import  chevron_right from "../images/icons/chevron-right.png";


class RegistrationSectionReviews extends Component{
    render(){
        return(
          <section  className="registration-section" id="reviews">
             <h2>Отзывы клиентов </h2>
             <img className="registration-section__chevron_left" src={chevron_left} alt="Стрелка влево"/>
             <div className="container-reviews">
                <div className="info-client">
               <img src={client} alt="Фото клиента"/>
                <div className="info-client-name">
                 <p className="info-client__name_bold">Иван Иванов</p>
                 <p>Москва</p>
                    </div>  
                 </div>
                 <p className="info-client__reviews">Классный сервис! В путешествиях 
                     по стране часто берём машину
в аренду. Здесь нету ограничений по зоне перемещения и поэтому есть возможность съездить в интересные туристические места, которые отдалены от города.</p>
                 </div>
             <img className="registration-section__chevron_right" src={chevron_right} alt="Стрелка вправо"/>
            <div className="group-circle">
            <div className="circle_dark"></div>
             <div className="circle"></div>
             <div className="circle"></div>
             <div className="circle"></div>
            </div>
        </section>
        );
    }
}
export default RegistrationSectionReviews;

