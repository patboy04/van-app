import React from "react"
import { useOutletContext } from "react-router-dom";

export default function HostVansPrice() {
    const [vanDetails] = useOutletContext();

    return (
        <div className="host--vans-details-info-container">
            <p>Price: <b>${vanDetails.price.toFixed(2)}</b> per day</p>
        </div>
    )
}