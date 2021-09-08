import React, {Component} from "react";
import SectionRegistrationMain from './SectionRegistrationMain';


class SectionRegistrationMain extends Component {
    render(){
        return (
           <section className="page-registration_main">
          <h1>Расскажите о себе</h1>
          <form>
              <legend>Информация о вас</legend>
              <div className="form">
              <label for="name">ФИО</label>
              <input type="text" name="name" id="name" placeholder="ФИО полностью"/>
              </div>
                <div className="form">
                 <label for="years">Дата рождения</label>
              <input type="date" name="date"/>
              </div>
                      <div className="form">
              <label for="emal">Электронная почта</label>
              <input type="email" name="email" placeholder="mail@example.com" id="email"/>
              </div>
                            <div className="form">
              <label for="phone">Телефон</label>
              <input type="tel" name="phone" id="phone" placeholder="+7 900 000-00-00"/>
              </div>
          </form>
          <form>
              <legend>Паспорт</legend>
              <div className="form">
              <label for="series">Серия и номер</label>
              <input type="number" name="series" placeholder="0000 000000"/>
              </div>
                  <div className="form">
                 <label for="issuance">Дата выдачи</label>
              <input type="date" name="issuance" id="issuance" value="01.01.1970"/>
                         </div>
                      <div className="form">
              <label for="department">Кем выдан</label>
              <input type="text" name="department"/>
                             </div>
                          <div className="form">
              <label for="code">Код подразделения</label>
              <input type="number" name="code" id="code" />
                                 </div>
          </form>
          <form>
              <legend>Водительское удостоверение</legend>
                      <div className="form">
              <label for="series">Серия и номер</label>
              <input type="text" name="series"/>
                           </div>
                                  <div className="form">
                 <label for="issuance">Дата выдачи</label>
              <input type="text" name="issuance"/>
                                       </div>
          </form>
           <form>
              <legend>Пароль</legend>
                       <div className="form">
              <label for="password">Придумайте пароль</label>
              <input type="password" name="password"/>
                            </div>
                                   <div className="form">
                 <label for="password">Повторите пароль</label>
              <input type="password" name="password"/>
                                        </div>
          </form>
        </section>
        );
             
       
      
    }
}
        );
             
       
      
    }
}
 
export default SectionRegistrationMain;