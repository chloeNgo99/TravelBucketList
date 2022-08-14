import React from "react"


/*
<div className="cardInfo">
               <span>{props.location} </span>
                <a href={props.googleMapsUrl}> View on Google Maps</a>
                <h3>{props.title}</h3>
                <span>{props.startDate} - {props.endDate}</span>
                <p>{props.description}</p>
</div>
*/

export default function Card(props){
    return(
        <div className="cards">
            <img src={`../images/${props.img}`} className="cardImg" />
            <div className="cardInfo">
                <img src="./images/icon.jpeg" className="icon" />
                <span className="cardLocation">{props.location} </span>
                <a href={props.googleMapsUrl} className="cardLink"> View on Google Maps</a>
                <h2>{props.title}</h2>
                <span className="cardDate">{props.startDate} - {props.endDate}</span>
                <p>{props.description}</p>
                <hr />
            </div>
        </div>
    )
}
