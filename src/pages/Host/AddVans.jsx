import React from "react"
import { Form, useNavigation } from "react-router-dom"
import { addVans } from "../../api"


export async function action({ request }) {
    const formData = await request.formData()
    const vanObject = {
        name: formData.get("name"),
        description: formData.get("description"),
        price: formData.get("price"),
        type: formData.get("type")
    }

    console.log(vanObject)
    try {
        addVans(vanObject)
    } catch (error) {
        console.log(error)
    }
    return null
}

export default function AddVans() {
    const navigation = useNavigation()
    const status = navigation.state

    return (
        <Form method="post" className="addVan--form--container" replace={true}>
            <input
                name="name"
                type="text"
                placeholder="Name of Van"
            />
            <input
                name="description"
                type="text"
                placeholder="Description"
            />
            <input
                name="price"
                type="text"
                placeholder="Price"
            />
            <input
                name="type"
                type="text"
                placeholder="type"
            />
            <button disabled={status === "submitting"} className="home--main--button">
                {status === "submitting" ? "Processing..." : "Add Vans"}
            </button>
        </Form>
    )
}

//TODO ADD INTERFACE FOR ADDING VANS
//INTERFACE WILL USE api.js to make api calls and add vans to firerstore