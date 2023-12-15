import { sendApiCall, APIREQUEST } from '$lib/server/SimonsVossApiWrapper';

/** @type {import('./$types').RequestHandler} */
export async function POST({ cookies, request }) {
    const authorizationCookie = `mk-auth=${cookies.get("mk-auth")}`;

    if (!authorizationCookie) {
        return new Response(JSON.stringify("Unauthorized"), { status: 401, statusText: "Unauthorized" })
    }
    console.log(authorizationCookie);
    const id = (await request.json())["LockId"];
    console.log(id)
    if (!id) {
        return new Response("no id", { status: 400 })
    }
    return sendApiCall(APIREQUEST.OpenLock, authorizationCookie, id!)
        .then((res) => { console.log(res); return res.json() })//res.json())
        .then((res) => { console.log(res); return new Response(JSON.stringify(res), { headers: { "Content-Type": "application/json; charset=utf-8" } }) })
        .catch((err: unknown) => new Response('error:' + err));
}
