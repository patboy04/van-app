import React, {useState} from "react"
import "../style/style.css"

export default function Login() {   
    const [formData, setFormData] = useState({email: "", password: ""})

    function handleSubmit(event) {
        e.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(event) {
        const  {name, value} = event.target
        setFormData(prevForm => ({
            ...prevForm,
            [name]: value 
        }))
    }

    return (
        <div className="login--container">
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login--form--container">
                <input
                    email="email"
                    type="text"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    email="password"
                    type="text"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button className="home--main--button">Log in</button>
            </form>
        </div>
    )
}