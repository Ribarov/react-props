import React from "react";
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

const App = () => {
    const profilePerson = data.map(item => {
        return <Card 
                item = {item}
                />
    })

    return(
    <div className="container">
        <Navbar />
        <Hero />
            <div className="cards-container">
                {profilePerson}
               
            </div>
    </div>
    )
}

export default App;
