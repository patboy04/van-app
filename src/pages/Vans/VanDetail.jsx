import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom"

export default function VanDetail() {
    const [vanDetails, setVanDetails] = useState([])
    const params = useParams() //gets params from current url
    const location = useLocation() //gets data from current url and previous state

    const prevParams = location.state?.searchParams || ""

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVanDetails(data.vans))
    }, [params.id])

    const buttonColor = {
        backgroundColor: 
            vanDetails.type === "simple" 
                ? "" 
                : vanDetails.type === "rugged"
                ? "#115E59"
                : "#161616"
    }

    return (
        <div>
            {vanDetails.id ? (
            <>
                <Link to={`..?${prevParams}`} relative="path">
                    <p className="previous round">&#8249; Back to {prevParams ? prevParams.substring(5) : "all"} vans</p>
                </Link>
                <div className="vandetails--container">
                    <img src={vanDetails.imageUrl} className="vandetails--img"/>
                    <div className="vandetails--textcontainer">
                        {vanDetails.type && < button className="van--button" style={buttonColor}> 
                            {vanDetails.type.toUpperCase()}
                        </button>}
                        <h1 className="vandetails--name">{vanDetails.name}</h1>
                        {}<h3 className="vandetails--price">{vanDetails.price}/day</h3>
                        <p className="vandetails--desc">{vanDetails.description}</p>
                        <button className="home--main--button">
                            <p className="vandetails--button">Rent This Van</p>
                        </button>
                    </div>   
                </div>  
            </> ) : <h1></h1>}
        </div>
    )

}