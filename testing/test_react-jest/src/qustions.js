import React from "react";
import ReactDOM from "react-dom";
import  QuestionApp from "./components/QuestionApp"; 

ReactDOM.render(<QuestionApp/>, document.getElementById("root"));

  let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
   
} 
      const btn1=document.querySelector(".btn_1");
     let icon1Answer=document.querySelector(".btn_1>img");
     let icon2Answer=document.querySelector(".icon_answer");
     const btn2=document.querySelector(".btn_2");
       let icon3Answer=document.querySelector(".btn_2>img");
           let icon4Answer=document.querySelector(".icon_answer1");
          const btn3=document.querySelector(".btn_3"); 
             let icon5Answer=document.querySelector(".btn_3>img");
           let icon6Answer=document.querySelector(".icon_answer2");
             const btn4=document.querySelector(".btn_4");
     let icon7Answer=document.querySelector(".btn_4>img");
     let icon8Answer=document.querySelector(".icon_answer3");
          const btn5=document.querySelector(".btn_5");
     let icon9Answer=document.querySelector(".btn_5>img");
     let icon10Answer=document.querySelector(".icon_answer4");
       const btn6=document.querySelector(".btn_6");
     let icon11Answer=document.querySelector(".btn_6>img");
     let icon12Answer=document.querySelector(".icon_answer5");     
     btn1.addEventListener("click",()=>{
    
         icon1Answer.classList.toggle("off");
       icon2Answer.classList.toggle("off");
       
     });
       btn2.addEventListener("click",()=>{
    
         icon3Answer.classList.toggle("off");
       icon4Answer.classList.toggle("off");
       
     });    
           
        btn3.addEventListener("click",()=>{
    
         icon5Answer.classList.toggle("off");
       icon6Answer.classList.toggle("off");
       
     });        
        btn4.addEventListener("click",()=>{
    
         icon7Answer.classList.toggle("off");
       icon8Answer.classList.toggle("off");
       
     });        
        btn5.addEventListener("click",()=>{
    
         icon9Answer.classList.toggle("off");
       icon10Answer.classList.toggle("off");
       
     }); 
       btn6.addEventListener("click",()=>{
    
         icon11Answer.classList.toggle("off");
       icon12Answer.classList.toggle("off");
       
     }); 