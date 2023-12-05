import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import "../style/Host.css"

export default function HostLayout() {

    const activeLink = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
            <div className="host--navbar">
                <NavLink to="" style={({isActive})=> isActive ? activeLink : null} end>Add Vans</NavLink>
                <NavLink to="vans" style={({isActive})=> isActive ? activeLink : null} >Vans</NavLink>   
            </div>
            <Outlet />
        </>
        
    )
}