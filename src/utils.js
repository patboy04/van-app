import { redirect } from "react-router"

export async function authenticateUser(request) {
    const urlPath = new URL(request.url).pathname
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (!isLoggedIn) {
        const response = redirect(`/login?message=You must login first&redirectTo=${urlPath}`)
        response.body = true
        throw response
    }

    return null
}
