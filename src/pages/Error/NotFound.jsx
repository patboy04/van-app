import React from "react";
import { Link } from "react-router-dom"
import "../../style/Error.css"

export default function NotFound() {
    return (
        <div className="error--container">
            <h1 className="error--message">Sorry, the page you were looking for was not found.</h1>
            <Link to="/"><button className="error--button">Return to Home</button></Link>
        </div>
        
    )
}