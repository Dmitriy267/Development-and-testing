import React from "react";
import "../styles/BlockImage.css"
function BlockImage(props){
   
    return(
    <div className="block-image">
                    <img src={props.imgUrl} alt={props.altName} />
                    <p>{props.name}</p>
                    <p className="job_text">{props.job} 
                   <abbr title={props.abbrTitle}></abbr></p>
      
                </div>
    );
    
}
export default BlockImage;