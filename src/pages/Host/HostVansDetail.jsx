import React, { Suspense } from "react"
import { Link, Outlet, NavLink, useLoaderData, defer, Await } from "react-router-dom"
import Loading from "../../component/Loading"
import { authenticateUser } from "../../utils"
import { getHostVans, getVanDetails } from "../../api"

export async function loader({ request, params} ) {
    await authenticateUser(request)
    const hostVansPromise = getVanDetails(params.id)
    return defer({hostVans: hostVansPromise})
}

export default function HostVansDetail() {
    const loaderData = useLoaderData()
    const activeLink = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function renderHostVansDetailsElements(vanDetails) {
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

    return (
        <>
            <Suspense fallback={<Loading />}>
                <Await resolve={loaderData.hostVans}>
                    {renderHostVansDetailsElements}
                </Await>
            </Suspense>
        </>
    )
}