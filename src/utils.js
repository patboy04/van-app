import { redirect } from "react-router"

export async function authenticateUser() {
    const isLoggedIn = true;

    if (!isLoggedIn) {
        const response = redirect("/login")
        response.body = true
        throw response
    }

    return null
}