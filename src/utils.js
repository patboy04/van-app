import { redirect } from "react-router"

export async function authenticateUser() {
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (!isLoggedIn) {
        const response = redirect("/login?message=You must login first")
        response.body = true
        throw response
    }

    return null
}