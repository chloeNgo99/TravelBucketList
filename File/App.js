import React from "react"
import Nav from "./components/Nav"
import Card from "./components/Card"
import data from "./data"


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                img={item.cardImg}
                location={item.location}
                googleMapsUrl={item.googleMapsUrl}
                title={item.title}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
            />
        )
    })        
    
    return (
        <div className="container">
            <Nav />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}