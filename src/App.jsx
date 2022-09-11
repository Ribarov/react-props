import React from "react";
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero";
import Card from "./components/Card"
const App = () => {
    return(
    <div className="container">
        <Navbar />
        <Hero />
            <div className="cards-container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
    </div>
    )
}

export default App;