import { sendApiCall, APIREQUEST } from '$lib/server/SimonsVossApiWrapper';

/** @type {import('./$types').RequestHandler} */
export function POST({ cookies }) {
    const authorizationCookie = `mk-auth=${cookies.get("mk-auth")}`;
    if (!authorizationCookie) {
        return new Response(JSON.stringify("Unauthorized"), { status: 401, statusText: "Unauthorized" })
    }
    console.log(authorizationCookie)

    return sendApiCall(APIREQUEST.ListLocks, authorizationCookie)
        .then((res) => res.json())
        .then((res) => new Response(JSON.stringify(res), { headers: { "Content-Type": "application/json; charset=utf-8" } }))
        .catch((err: unknown) => new Response('error:' + err));
}
