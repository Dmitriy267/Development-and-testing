import React, {Component} from "react";
import "../styles/Commands.css";
import BlockImage from "./BlockImage.js";
import ivanov from "../images/Ivanov.png";
import smirnov from "../images/Smirnov.png";
import  iarcev from "../images/Iarcev.png";
import  morozov from "../images/Morozov.png";
import   deeva from "../images/Deeva.png";
import   strelkova from "../images/Strelckova.png";

class Commands extends Component{
    render(){
        return(
           <section id="commands">
            <h2>Команда</h2>
            
            <div className="top block">
        <div className="mobile-top_block">
            <BlockImage
            imgUrl={ivanov}
            altName="Иванов"
            name="Иван Иванов"
            abbrTitle="Генеральный Директор"
            job="СЕО"
        
            />
            <BlockImage
            imgUrl={smirnov}
            altName="Смирнов"
            name="Алексей Смирнов"
            job="Frontend-разработчик"
                abbrTitle=""
            />
            </div>
              
            <div className="mobile-top_block indent">
             <BlockImage
            imgUrl={iarcev}
            altName="Ярцев"
            name="Денис Ярцев"
            abbrTitle=""
            job="Backend-разработчик"
        
            />
             <BlockImage
            imgUrl={morozov}
            altName="Морозов"
            name="Николай Морозов"
            abbrTitle=""
            job="Дизайнер"
        
            />
            </div>
            </div>
            <div className="bottom block">
                <div className="mobile-top_block indent">
             <BlockImage
            imgUrl={deeva}
            altName="Деева"
            name="Ирина Деева"
            abbrTitle=""
            job="Копирайтер"
        
            />
             <BlockImage
            imgUrl={strelkova}
            altName="Стрелкова"
            name="Мария Стрелкова"
            abbrTitle="Менеджер по маркетингу в социальных сетях"
            job="SMM"
        
            />
         
            </div>
                </div> 
     </section>
        );
    }
}
export default Commands;