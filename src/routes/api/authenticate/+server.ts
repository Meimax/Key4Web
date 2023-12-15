import { getAuthorizationCookie } from '$lib/server/SimonsVossApiWrapper.js';
/** @type {import('./$types').RequestHandler} */
export function GET({ request }) {
    const AuthorizationString = request.headers.get("Authorization");
    if (!AuthorizationString) {
        return new Response(JSON.stringify("No authorization provided."), { status: 401, statusText: "Unauthorized" })
    }
    return getAuthorizationCookie(AuthorizationString).then(cookie => {
        if (!cookie) {
            //console.log("empty");
            return new Response(JSON.stringify("failed"), { status: 401, statusText: "Unauthorized" })
        }
        return new Response('"success"', { headers: { "Set-Cookie": cookie! } })
    })
}