import React from "react"
import { useOutletContext } from "react-router-dom";

export default function HostVansPhoto() {

    const [vanDetails] = useOutletContext();

    return (
        <div className="host--vans-details-info-container">
            <img src={vanDetails.imageUrl} />
        </div>
    )
}