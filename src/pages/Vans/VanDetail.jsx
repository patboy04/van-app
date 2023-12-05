import React, { Suspense } from "react";
import { Link, useLocation, useLoaderData, defer, Await } from "react-router-dom"
import Loading from "../../component/Loading.jsx"
import { getVans } from "../../api";

export async function loader({params}) {
    const vanDetailsPromise = getVans(params.id)
    return defer({vanDetails: vanDetailsPromise})
}

export default function VanDetail() {
    const loaderData = useLoaderData()
    const location = useLocation() //gets data from current url and previous state

    const prevParams = location.state?.searchParams || ""

    function renderVanDetailsElements(vanDetails) {
        const buttonColor = {
            backgroundColor: 
                vanDetails.type === "simple" 
                    ? "" 
                    : vanDetails.type === "rugged"
                    ? "#115E59"
                    : "#161616"
        }

        return (
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
            </>
        )
    
    }

    return (
        <div>
            <Suspense fallback={<Loading />}>
                <Await resolve={loaderData.vanDetails}>
                    {renderVanDetailsElements}
                </Await>
            </Suspense>
        </div>
    )

}