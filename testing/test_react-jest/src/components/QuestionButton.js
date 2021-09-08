import React from "react";
import chevron_down from "../images/icons/chevron-big-down.png";
import chevron_up from "../images/icons/chevron-big-up.png";
import "../styles/QuestionButton.css";





 
function QuestionButton (props){
    return (
        
        <button  type="button" className={props.contact.btn_num} aria-label="Кнопка с вопросом"><img src={chevron_down} alt="Показать ответ" />
        <img src={chevron_up} alt="Скрыть ответ" className={props.contact.offIcons}/>
        {props.contact.btn_name}</button>
    );
}


export default QuestionButton;