import React from "react";
import "../styles/HeaderAutorization.css";
import close  from "../images/autorization/btn-close__crose.png";
function HeaderAutorization(){
    return (
        <header className="autorization-header">
            <button className="autorization-header__btn-cloze">
                <img src={close} className="btn-cloze__cross_little" alt='Кнопка "Закрыть"'/>
            </button>
        </header>
    );
}
export default HeaderAutorization;
