import React from "react";
import {useState} from 'react';
import "../styles/AutorizationSection.css";
import sign  from "../images/autorization/undraw_sign.png";
function AutorizationSection (){
	const [mail, setMail]=useState('');
	const [password, setPassword]=useState('');
	function onMailChange(e){
		setMail(e.target.value);
	}
	function onSubmit(e){
		e.preventDefault();
		console.log(mail);
		console.log(password);
	}
	function onPasswordChange (e){
		setPassword(e.target.value);
	}
	function handeClickLink(msg){
		console.log('Укажите адрес электронной почты и мы отправим секретный код');
		
	}
	handeClickLink('Укажите адрес электронной почты и мы отправим секретный код')
        return(
             <section className="autorization-section">
            <img src={sign} alt="Рисунок страницы авторизации"/>
            <form className="autorization-form">
                <legend>Авторизация</legend>
                <input  type="email" name="mail" value={mail} onChange={onMailChange} placeholder="Электронная почта"/>
                   <input type="password" name="password" value={password} onChange={onPasswordChange} placeholder="Пароль"/>
		
                <a href="#" className="autorization-form__link-recovery" onClick={handeClickLink}>Забыли?</a>
                <button className="autorization-form__btn-enter" onClick={onSubmit}>Войти</button>
            </form>
        </section>
        );
    
}
export default AutorizationSection;

