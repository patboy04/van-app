import React, { Suspense } from "react";
import { Link, useSearchParams, useLoaderData, defer, Await } from "react-router-dom";
import Loading from "../../component/Loading.jsx";
import Van from "../../component/Van.jsx"
import { getVans } from "../../api.js"
import "../../style/Vans.css"

export async function loader() {
    const vansPromise = getVans()
    return defer({vans: vansPromise})
}

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams() //?query of url
    const loaderData = useLoaderData()

    const typeFilter = searchParams.get("type")
    
    const simpleColor = {
        backgroundColor: typeFilter === "simple" ? "#E17654" : "",
        color: typeFilter === "simple" ? "white" : ""
    }
    const ruggedColor = {
        backgroundColor: typeFilter === "rugged" ? "#115E59" : "",
        color: typeFilter === "rugged" ? "white" : ""
    } 
    const luxuryColor = {
        backgroundColor: typeFilter === "luxury" ? "#161616" : "",
        color: typeFilter === "luxury" ? "white" : ""
    }

    function renderVansElements(vans) {
        const filteredVans = typeFilter 
        ? vans.filter(van => van.type === typeFilter)
        : vans

        const renderVans = filteredVans.map(van => (
            <Van 
                key={van.id}
                id={van.id}
                name={van.name}
                price={van.price}
                type={van.type}
                description={van.description}
                image={van.imageUrl}
                searchParams={searchParams.toString()}
            />
        ))

        return (
            <>
                <div className="explore--container">
                    <button onClick={() => setSearchParams(
                        {type: "simple"})}className="explore--button" style={simpleColor}>
                        Simple
                    </button>
                    <button onClick={() => setSearchParams(
                        {type: "luxury"})}className="explore--button" style={luxuryColor}>
                        Luxury
                    </button>
                    <button onClick={() => setSearchParams(
                        {type: "rugged"})}className="explore--button" style={ruggedColor}>
                        Rugged
                    </button>
                    {typeFilter !== null && <Link to=""><p className="explore--filter">Clear Filters</p></Link>}
                </div>
                <div className="center">
                    <div className="van--container">
                        {renderVans}
                    </div>
                </div>
            </>
        )
    }

    /* 
        function genNewSearchParamString(key, value) {
            const sp = new URLSearchParams(searchParams)
            if (value === null) {
                sp.delete(key)
            } else {
                sp.set(key, value)
            }
            return `?${sp.toString()}`
        } 

        function handleFilterChange(key, value) {
            setSearchParams(prevParams => {
                if (value === null) {
                    prevParams.delete(key)
                } else {
                    prevParams.set(key, value)
                }
            return prevParams
            })
        }
    */

    return (
        <div>
            <h1 className="explore--text">Explore our van options</h1>
            <Suspense fallback={<Loading />}>
                <Await resolve={loaderData.vans}>
                    {renderVansElements}
                </Await>
            </Suspense>
        </div>
    )
    
}