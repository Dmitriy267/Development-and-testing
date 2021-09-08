import React, {Component} from "react";
import  "../styles/RecoverySection.css";
import password from '../images/recovery/undraw_my_password.png';
/*import {Todolist} from "../parts/Todolist";
import {AddTodo} from "../parts/AddTodo";*/
class RecoverySection extends Component{
    render (){
        return(
             <section className="recovery-section">
            <img src={password} alt="Рисунок страницы восстановления пароля"/>
           
            <form className="recovery-form">
                <legend>Восстановление пароля</legend>
                <p>Мы отправим ссылку для восстановления пароля на вашу электронную почту</p>
                <input  type="email" name="mail" placeholder="Электронная почта"/>
               
                <button className="recovery-form__btn-enter">Отправить</button>
            </form>
        </section>
        );
    }
}

export default RecoverySection;

