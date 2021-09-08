import React from "react";
import "../styles/Contacts.css"
function Contacts (){
    return (
       <section id="contacts">
                    
            <h2> Контакты</h2>
           <div className="info_contacts">
               <div class="info">
                   <p>Электронная почта</p>
                   <a href="mailto:drive@skillfactory.com" >drive@skillfactory.com</a>
               </div>
               
               <div className="line">
               </div>
               <div className="info">
                 <p>Телефон</p>
                   <a href="tel:+79121234567">+7 912 123-45-67</a>  
               </div>
            </div>
        </section>  
    );
}
export default Contacts;