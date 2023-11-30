import React from "react";
import { Link } from "react-router-dom"
import "../style/Home.css"
import "../style/style.css"

export default function Home() {
    return (
        <div>
            <main className="home--main--container">
                <h1 className="home--main--maintext">You got the travel plans, we got the travel vans.</h1>
                <h2 className="home--main--subtext">
                    Add adventure to your life by joining the #vanlife movement.
                    Rent the perfect van to make your perfect road trip.
                </h2>
                <div className="home--main--button">
                    <Link to="/vans">Find your van</Link>
                </div>
            </main>
        </div>
    )
}