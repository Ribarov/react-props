import React from "react";
import image1 from '../images/image1.png';


const Hero  = () => {
    return(
    <div className="hero-container">
        <div className="pictures">
            <img src={require('../images/image1.png')} alt="" className="image1" />
            <img src={require('../images/image2.png')} alt="" className="image2" />
            <img src={require('../images/image3.png')} alt="" className="image3" />
            <img src={require('../images/image4.png')} alt="" className="image4" />
            <img src={require('../images/image5.png')} alt="" className="image5" />
            <img src={require('../images/image6.png')} alt="" className="image6" />
            <img src={require('../images/image7.png')} alt="" className="image7" />
            <img src={require('../images/image8.png')} alt="" className="image8" />
            
        </div>
        <div className="heroheader">
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    </div>
    )
}

export default Hero;