import React from "react";
import { NavLink } from "react-router-dom"
import profileIcon from "../assets/user.png"

export default function Header() {
    const activeLink = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function logOut() {
        localStorage.removeItem("loggedIn")
        window.location.reload();
    }

    return (
        <nav>
            <NavLink to="." className="navbar--title">#VANLIFE</NavLink>
            <div className="navbar--links--container">
                <NavLink to="host" style={({isActive})=>isActive ? activeLink : null}>Host</NavLink>
                <NavLink to="about" style={({isActive})=>isActive ? activeLink : null}>About</NavLink>
                <NavLink to="vans" style={({isActive})=>isActive ? activeLink : null}>Vans</NavLink>
                { localStorage.getItem("loggedIn") 
                    ? <a onClick={logOut} style={{cursor:"pointer"}}>Logout</a>
                    : <NavLink to="login" ><img src={profileIcon} className="user--icon" /></NavLink>
                }
                
            </div>
        </nav>
    )
}