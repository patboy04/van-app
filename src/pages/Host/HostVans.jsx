import React, { Suspense } from "react"
import { useLoaderData, defer, Await } from "react-router-dom"
import VanList from "../../component/VanList.jsx"
import Loading from "../../component/Loading.jsx"
import { getHostVans } from "../../api.js"
import { authenticateUser } from "../../utils.js"
import "../../style/Host.css"

export async function loader({ request }) {
    await authenticateUser(request)
    const hostVansPromise = getHostVans()
    return defer({ hostVans: hostVansPromise})
}

export default function HostVans() {
    const loaderData = useLoaderData()

    function renderHostVansElements(vanList) {
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
            <>
                <h1 className="host--title-header">Your Listed Vans</h1>
                <div className="host--vans-grid">
                    {renderVansList}
                </div>
            </>
            
        )
    }

    return (
        <div>
            <Suspense fallback={<Loading />}>
                <Await resolve={loaderData.hostVans}>
                    {renderHostVansElements}
                </Await>
            </Suspense>
        </div>     
    )
}