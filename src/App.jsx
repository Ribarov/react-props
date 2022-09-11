import React from "react";
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero";
import Card from "./components/Card";

const App = () => {
    return(
    <div className="container">
        <Navbar />
        <Hero />
            <div className="cards-container">
                <Card 
                      profile={require("./images/veronica.jpg")}
                      name="Veronica, "
                      rating="4.1" 
                      age=" 36,"
                      country="MKD"
                      service="Hiking tours near Galicica"
                      price="30$" />
                <Card 
                      profile={require("./images/ravi.jpg")}
                      name="Ravi,"
                      rating="4.4" 
                      age=" 23,"
                      country="AUS"
                      service="Guitar lessons by the beach"
                      price="23$" />
                <Card
                      profile={require("./images/john.jpg")}
                      name="John,"
                      rating="3.9" 
                      age=" 30,"
                      country="UK"
                      service="Photography lessons"
                      price="35$"
                    />
                 <Card
                      profile={require("./images/desire.jpg")}
                      name="Desire,"
                      rating="4.6" 
                      age=" 28,"
                      country="USA"
                      service="Grand Canyon tour opp"
                      price="50$"
                    />
               
            </div>
    </div>
    )
}

export default App;