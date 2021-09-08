import React, {Component} from "react";
import  "../styles/RecoveryHeader.css";
import arrow_left from '../images/recovery/arrow-left.png';
import btn_close from "../images/recovery/btn-close__crose.png";

class RecoveryHeader extends Component{
    render (){
        return(
           <header className="recovery-header">
            <button>
                <img src={arrow_left} alt='Стрелка "Влево"' className="btn-arrow__images-arrow_left"/>
            </button>
                 <button>
                <img src={btn_close} className="btn-cloze__cross_little" alt='Кнопка "Закрыть"'/>
            </button>
        
        
        </header>
        );
    }
}

export default RecoveryHeader;

