import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVansInfo() {

    const [vanDetails] = useOutletContext();

    return (
        <div className="host--vans-details-info-container">
            <p>Name: {vanDetails.name}</p>
            <p>Category: {vanDetails.type}</p>
            <p>Description: {vanDetails.description}</p>
        </div>
    )
}