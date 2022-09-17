import React from "react";
import data from "../data"

function Card (card) {
        let badgeText;
        if(card.item.sold === 0) {
            badgeText = "Sold out"
        }
        else if(card.item.location === "online") {
            badgeText = "Online"
        }
        
    return(
        <div className="card-container">
            <img className="card-image" src={card.item.profile} alt="" />
            <div>
               {badgeText && <a className="sold"> {badgeText}</a> }
            </div>
            <div className="card--stats"> 
                
                <img className="star" src={require("../images/Star1.png")} alt=""/>
                <span className="rating">{card.item.rating}</span>
                <span className="name">{card.item.name}</span> 
                <span className="grey"> {card.item.age} </span> 
                <span className="grey"> {card.item.country} </span> 
                
            </div>  
            <div className="service">
                
                <p className="service-name">{card.item.service}</p>
                <p className="price">From {card.item.price}/<span>person/hour</span></p>
            </div>
        </div>
        
    )
}

export default Card