import React from "react";
import  '../styles/SectionMain.css'
import undraw from "../images/undraw_questions_75.png";
function SectionMain (){
    return (
     <section>
            <img src={undraw} alt="Векторное изображение" className="vector-image-faq"/>
           <h1 className="about-faq">Частые вопросы </h1>
             <p className="textF">Отвечаем на вопросы, которые у вас могут возникнуть.</p>
        </section>
    );
}
export default SectionMain;