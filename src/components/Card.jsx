import React from "react";

function Card (card) {
    return(
        <div className="card-container">
            <img className="card-image" src={card.profile} alt="" />
            
            <div className="card--stats"> 
                
                <img className="star" src={require("../images/Star1.png")} alt=""/>
                <span className="rating">{card.rating}</span>
                <span className="name">{card.name}</span> 
                <span className="grey"> {card.age} </span> 
                <span className="grey"> {card.country} </span> 
                
            </div>  
            <div className="service">
                
                <p className="service-name">{card.service}</p>
                <p className="price">From {card.price}/<span>person/hour</span></p>
            </div>
        </div>
        
    )
}

export default Card