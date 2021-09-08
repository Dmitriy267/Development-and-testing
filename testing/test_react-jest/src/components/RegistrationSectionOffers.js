import React, {Component} from "react";
import  "../styles/RegistrationSectionOffers.css";
import price from "../images/Main/price.png";
import insurance from "../images/Main/insurance.png";
import  commission from "../images/Main/commission.png";
import  payouts from "../images/Main/payouts.png";

class RegistrationSectionOffers extends Component{
    render(){
        return(
        <section className="registration-section" >
             <h2 className="registration-section__name-question">У вас есть автомобиль?</h2>
             <p>Чтобы он не простаивал — сдавайте его в аренду и зарабатывайте.</p>
             <div className="registration-section-offers">
             <div className="registration-section-change">
                <img className="registration-section-change__mark" src={price} alt="Метка цены сдачи авто в аренду"/>
             <p>Вы сами указываете цену</p>
             </div>
             <hr className="dash"/>
              <div className="registration-section-change">
                <img className="registration-section-change__mark" src={insurance} alt="Метка страховки авто"/>
             <p>Мы страхуем автомобили</p>
             </div>
             <hr className="dash"/>
              <div className="registration-section-change">
                <img className="registration-section-change__mark" src={commission} alt="Метка комиссии за страховку"/>
             <p>Наша комиссия всего 3%</p>
             </div>
             <hr className="dash"/>
              <div className="registration-section-change">
                <img className="registration-section-change__mark" src={payouts} alt="Метка выплаты"/>
             <p>Выплаты каждую неделю</p>
             </div>
             </div>
             
        </section>
        );
    }
}
export default RegistrationSectionOffers;



