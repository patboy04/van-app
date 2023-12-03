import React, { useState } from "react"
import { useLoaderData, Form, redirect, useNavigate } from "react-router-dom"
import { loginUser } from "../api"
import "../style/style.css"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        const data = await loginUser({email, password})
        localStorage.setItem("loggedIn", true)
        const res = redirect("/host")
        res.body = true;
        return res
    } catch(err) {
        console.log(err.message)
        return err.message
    }
    
}

export default function Login() {   
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
    const message = useLoaderData()
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        setStatus("submitting")
        setError(null)
        loginUser(formData)
            .then(data => {
                navigate("/host", { replace: true })
            })
            .catch(err => setError(err))
            .finally(() => setStatus("idle"))
    }

    return (
        <div className="login--container">
            <h1>Sign in to your account</h1>
            { message && <h3>{message}</h3> }
            { error && <h3>{error.message}</h3> }
            <Form method="post" className="login--form--container">
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
                    {status === "submitting" ? "Logging in" : "Log in"}
                </button>
            </Form>
        </div>
    )
}