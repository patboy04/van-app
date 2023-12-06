import React, { useState } from "react"
import { 
    useLoaderData,
    Form,   
    redirect,
    useActionData,
    useSearchParams, 
    useNavigation,
    Navigate,
} from "react-router-dom"
import { loginUser } from "../api"
import "../style/style.css"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    //url to redirect once logged in
    const redirectTo = new URL(request.url).searchParams.get("redirectTo")

    //form data
    const formData = await request.formData()
    const action = formData.get("action")
    const email = formData.get("email")
    const password = formData.get("password")

    try {
        if(action === "login") {
            const data = await loginUser({email, password})
            localStorage.setItem("loggedIn", true)
            const res = redirectTo ? redirect(redirectTo) : redirect("/host")
            res.body = true;
            window.location.reload();
            return res
        } 
        
    } catch(err) {
        return err.message
    }
    
}

export default function Login() {   
    const [signup, setSignup] = useState(false)
    const error = useActionData()
    const message = useLoaderData()
    const status = useNavigation().state //Either idle or submitting
    const [queryParameters] = useSearchParams() //gets current url params
    const redirectTo = queryParameters.get("redirectTo") //gets redirectTo param

    if(localStorage.getItem("loggedIn") && redirectTo) {
        return <Navigate to={redirectTo}/>
    } else if (localStorage.getItem("loggedIn") && !redirectTo) {
        return <Navigate to="/host"/>
    }

    return (
        <div className="login--container">
            <h1>{signup ? "Sign up your account" : "Login to your account"}</h1>
            { message && <h3>{message}</h3> }
            { error && <h3>{error}</h3> }
            <Form method="post" className="login--form--container" replace={true}>
                <input
                    name="action"
                    type="hidden"
                    value={signup ? "signup" : "login"}
                />
                <input
                    name="email"
                    type="text"
                    placeholder="email"
                />
                <input
                    name="password"
                    type="text"
                    placeholder="password"
                />
                <button disabled={status === "submitting"} className="home--main--button">
                    {status === "submitting" ? "Processing..." : "Submit"}
                </button>
            </Form>
            <p className={"login--signup"}onClick={() => setSignup(prevSignup => !prevSignup)}>
                {signup ? "Already have an account? Login here" : "Don't have an account? Sign up here!"}
            </p>
        </div>
    )
}