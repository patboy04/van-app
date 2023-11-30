import React, { useState, useEffect } from "react"
import { Link, useParams, Outlet, NavLink } from "react-router-dom"

export default function HostVansDetail() {

    const [vanDetails, setVanDetails] = useState(null)
    const {id} = useParams();

    const buttonColor = {
        backgroundColor: vanDetails === null 
        ? "" 
        : vanDetails.type === "simple"
        ? ""
        : vanDetails.type === "rugged"
        ? "#115E59"
        : vanDetails.type === "luxury"
        ? "#161616"
        : ""
    }

    const activeLink = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setVanDetails(data.vans))
    }, [])

    if(!vanDetails) return <div></div>

    return (
    <div className="host--vans-detail-container">
        <Link to=".." relative="path"> &larr;</Link>
        <div className="host--vans-detail-flex">
            <img src={vanDetails.imageUrl}/>
            <div className="host-vans-detail-text-container">
                {vanDetails.type && <button style={buttonColor}>{vanDetails.type.toUpperCase()}</button>}
                <p><b>{vanDetails.name}</b></p>
                <p><b>${vanDetails.price}</b>/day</p>   
            </div>
            <div className="host--vans-detail-wrapper">
                <div className="host--vans-detail-navbar">
                    <NavLink to="." style={({isActive})=> isActive ? activeLink : null}end>Details</NavLink>
                    <NavLink to="pricing" style={({isActive})=> isActive ? activeLink : null}>Pricing</NavLink>
                    <NavLink to="photos" style={({isActive})=> isActive ? activeLink : null}>Photo</NavLink>
                </div>
                <Outlet context={[vanDetails]} />
            </div>
        </div>
    </div>
        
    )
}