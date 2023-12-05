import React from "react";
import { InfinitySpin } from 'react-loader-spinner'

export default function Loading() {
    return (
        <div className="loading--container">
            <h1>Loading</h1>
            <InfinitySpin 
                color="black"
            />
        </div>
       
    )
}