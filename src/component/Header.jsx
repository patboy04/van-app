import React from "react";
import { NavLink } from "react-router-dom"

export default function Header() {

    const activeLink = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <nav>
            <NavLink to="." className="navbar--title">#VANLIFE</NavLink>
            <div className="navbar--links--container">
                <NavLink to="host" style={({isActive})=>isActive ? activeLink : null}>Host</NavLink>
                <NavLink to="about" style={({isActive})=>isActive ? activeLink : null}>About</NavLink>
                <NavLink to="vans" style={({isActive})=>isActive ? activeLink : null}>Vans</NavLink>
            </div>
        </nav>
    )
}