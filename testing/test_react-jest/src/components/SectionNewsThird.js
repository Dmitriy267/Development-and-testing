import React from "react";
import  "../styles/SectionNewsThird.css";
import transactions from "../images/Main/undraw_online_transactions.png";

function SectionNewsThird (){
    return(
          <section className="section-news-third">
              <div className="container-news-third">
             <img className="container-news__image_third" src={transactions} alt="Третий рисунок блока  новостей"/>
                <div className="container-news__flex-third">  
            <h2>Гарантия честной аренды</h2>
            <p>Общение и оплата происходит через наш сервис, что предотвращает вас от обмана.</p>
             </div>
             </div>
        </section>
    );
}
export default SectionNewsThird;

