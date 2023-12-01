import React from "react";
import { useRouteError, Link } from "react-router-dom";

export default function Error() {
    const error = useRouteError()
    console.log(error)

    return (
        <div className="error--container">
            <h1 className="error--message">{error.message}</h1>
            <Link to="/"><button className="error--button">Return to Home</button></Link>
        </div>
    )
}