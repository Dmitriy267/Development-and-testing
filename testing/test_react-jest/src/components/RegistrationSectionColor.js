import React, {Component} from "react";
import  "../styles/RegistrationSectionColor.css";


class RegistrationSectionColor extends Component{
    render(){
        return(
         <section className="registration-section section-color">
             <h2>Как арендовать автомобиль </h2>
             <div className="registration-section-container">
             <div className="registration-section__rent-container">
                 <p className="registration-section__rent-container_num">1</p>
             <p className="registration-section__rent-container_text-condition">Выберите автомобиль</p>
             </div>
             <hr className="dash"/>
              <div className="registration-section__rent-container">
             <p className="registration-section__rent-container_num">2</p>
             <p className="registration-section__rent-container_reservation">Забронируйте дату и время</p>
             </div>
             <hr className="dash"/>
             <div className="registration-section__rent-container">
             <p className="registration-section__rent-container_num">3</p>
             <p className="registration-section__rent-container_text-condition">Получите автомобиль</p>
             </div>
             </div>
        </section>
        );
    }
}
export default RegistrationSectionColor;