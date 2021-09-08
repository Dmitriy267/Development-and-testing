import React from "react";
import "../styles/RecoverySection.css";
export const AddTodo =()=>{
    return (
             <form className="recovery-form">
                <legend>Восстановление пароля</legend>
                <p>Мы отправим ссылку для восстановления пароля на вашу электронную почту</p>
                <input  type="email" name="mail" placeholder="Электронная почта"/>
               
                <button className="recovery-form__btn-enter">Отправить</button>
            </form>
    )
}