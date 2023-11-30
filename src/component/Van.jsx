import React from "react"
import { Link } from "react-router-dom"
import "../style/Vans.css"

export default function Van(props) {
    
    const buttonColor = {
        backgroundColor: 
            props.type === "simple" 
                ? "" 
                : props.type === "rugged"
                ? "#115E59"
                : "#161616"
    }

    return (
        <Link to={`${props.id}`} state={{searchParams: props.searchParams}}>
            <div className="van--component">
                <img src={props.image}/>
                <div className="van--text--container">
                    <h5 className="van--name">{props.name}</h5>
                    <h5 className="van--price">${props.price}/day</h5>
                </div>
                <button className="van--button" style={buttonColor}>
                    {props.type.toUpperCase()}
                </button>

            </div>
        </Link>
    )
}