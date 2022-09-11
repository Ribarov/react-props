import React from "react";

const Card = () => {
    return(
        <div className="card-container">
            <img className="card-image" src={require("../images/card-image.png")} alt="" />
            <div className="card--stats"> 

                <img className="star" src={require("../images/Star1.png")} alt=""/>
                <span className="rating">5.0</span>
                <span className="grey"> (6) </span> 
                <span className="grey"> USA </span> 
                
            </div>  
            <div className="service">
                <p className="service-name">Life lessons with Katie Zaferes</p>
                <p className="price">From 136$/<span>person</span></p>
            </div>
        </div>
        
    )
}

export default Card