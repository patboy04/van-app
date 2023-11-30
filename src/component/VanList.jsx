import React from "react";
import { Link } from "react-router-dom"
import "../style/Host.css"

export default function VanList(props) {
    return (
        <Link to={`${props.id}`}>
            <div className="host--vans-container">
                <img src={props.image} className="host--vans-img"/>
                <div className="host--vans-text-container">
                    <p><b>{props.name}</b></p>
                    <p>${props.price}/day</p>
                </div>
            </div>
        </Link>
    )
}