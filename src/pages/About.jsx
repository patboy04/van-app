import React from "react";
import { Link } from "react-router-dom"
import "../style/About.css"
import bgimage from "../assets/bgimage.png"

export default function About() {
    return (
        <div>
            <main>
                <img className="about--main--bgimage"src={bgimage}></img>
                <div className="about--main--container">
                    <h1 className="about--main--text">Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <h4 className="about--main--subtext">Our mission is to enliven your road trip with the perfect travel van rental. 
                        Our vans are recertified before each trip to ensure your travel plans can 
                        go off without a hitch.(Hitch costs extra 😉)
                        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                    </h4>
                    <div className="about--explore--container">
                        <h2 className="about--explore--text">Your destination is waiting. Your van is ready.</h2>
                        <Link to="/vans">
                            <button className="about--explore--button"> Explore our vans</button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}