import React from "react"
import { Form, useNavigation, redirect } from "react-router-dom"
import { addVans } from "../../api"
import "../../utils"


export async function action({ request }) {
    const formData = await request.formData()
    const vanObject = {
        name: formData.get("name"),
        description: formData.get("description"),
        price: formData.get("price"),
        type: formData.get("type")
    }

    try {
        addVans(vanObject)
        const res = redirect("vans")
        res.body = true;
        return res
    } catch (err) {
        return err.message
    }
}

export default function AddVans() {
    const navigation = useNavigation()
    const status = navigation.state

    return (
        <div>
            <Form method="post" className="addVan--form--container" replace={true}>
                <h1>Add You Van!</h1>
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
                    type="number" 
                    placeholder="$10"
                />
                <select name="type">
                    <option value="rugged">Rugged</option>
                    <option value="luxury">Luxury</option>
                    <option value="simple">Simple</option>
                </select>
                <button disabled={status === "submitting"} className="home--main--button">
                    {status === "submitting" ? "Processing..." : "Add Vans"}
                </button>
             </Form>

        </div>
        
    )
}

//TODO ADD INTERFACE FOR ADDING VANS
//INTERFACE WILL USE api.js to make api calls and add vans to firerstore