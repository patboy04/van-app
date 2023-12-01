import React, {useState, useEffect} from "react"
import { useLoaderData } from "react-router-dom"
import VanList from "../../component/VanList.jsx"
import { getHostVans } from "../../api.js"
import "../../style/Host.css"

export function loader() {
    return getHostVans()
}

export default function HostVans() {
    const data = useLoaderData()
    const vanList = data.vans
    
    //const [vanList, setVanList] = useState([])
    
    // useEffect(() => {
    //     fetch("/api/host/vans")
    //         .then(res => res.json())
    //         .then(data => setVanList(data.vans))
    // }, [])

    const renderVansList = vanList.map(van => (
        <VanList 
            key={van.id}
            id={van.id}
            image={van.imageUrl}
            name={van.name}
            price={van.price}
        />
    ))

    return (
        <div>
            <h1 className="host--title-header">Your Listed Vans</h1>
            {vanList.length > 0 ? (
                <div className="host--vans-grid">
                    {renderVansList}
                </div>
            ) : <h1></h1>}

        </div>
        
        
    )
}