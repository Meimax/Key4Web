import { getAuthorizationCookie } from '$lib/server/SimonsVossApiWrapper.js';
/** @type {import('./$types').RequestHandler} */
export function POST({ request }) {
    const AuthorizationString = request.headers.get("Authorization");
    if (!AuthorizationString) {
        return new Response(JSON.stringify("No authorization provided."), { status: 401, statusText: "Unauthorized" })
    }
    return getAuthorizationCookie(AuthorizationString).then(cookie => {
        if (!cookie) {
            return new Response(JSON.stringify("failed"), { status: 401, statusText: "Unauthorized" })
        }

        // set cookie to expire in one year instead of being a session cookie
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        cookie = cookie.concat("; Expires=", date.toUTCString());
        return new Response('"success"', { headers: { "Set-Cookie": cookie! } })
    })
}