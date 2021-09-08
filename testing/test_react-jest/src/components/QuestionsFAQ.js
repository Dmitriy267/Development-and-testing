import React, {Component} from "react";
import QuestionButton from './QuestionButton';
import "../styles/QuestionsFAQ.css";
import AnswerContent from "./AnswerContent";
import Noscript from './Noscript';
import "../styles/Noscript.css";

class QuestionsFAQ extends Component {
    
    render(){
        return (
            <section id="Qustions_FAQ">
            <Noscript/>
            <QuestionButton
         contact={{
            btn_num: "collapsible btn_1",
            offIcons: "off icon_answer",
            btn_name: "Могу ли я отменить бронь?",
            }}
            />
            <AnswerContent/>
            <QuestionButton
            contact={{
            btn_num: "collapsible btn_2",
             offIcons: "off icon_answer1",
            btn_name:"Могу ли я вернуть деньги, если не подошёл автомобиль?"
            }}
            />
             <AnswerContent/>
             <QuestionButton
            contact={{
            btn_num: "collapsible btn_3",
             offIcons: "off icon_answer2",
            btn_name: "Что делать, если случилось ДТП?"
            }}
            />
             <AnswerContent/>
            <QuestionButton
            contact={{
            btn_num: "collapsible btn_4",
            offIcons: "off icon_answer3",
            btn_name:"Могу ли я оставить автомобиль в удобном для меня месте?"
            }}
            />
             <AnswerContent/>
               <QuestionButton
              contact={{
            btn_num: "collapsible btn_5",
            offIcons: "off icon_answer4",
            btn_name: "Что делать, если собственник просит заплатить ему напрямую?"
            }}
            />
             <AnswerContent/>
             <QuestionButton
             contact={{
            btn_num: "collapsible btn_6",
            offIcons: "off icon_answer5",
            btn_name: "Должен ли я заправлять автомобиль?"
            }}
            />
             <AnswerContent/>
            
            
            </section>
        );
    }
}
export default QuestionsFAQ;