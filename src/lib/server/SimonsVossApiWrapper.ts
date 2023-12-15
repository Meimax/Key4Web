export async function sendApiCall(requestType: APIREQUEST, authorizationCookie: string, id?: number) {
    const apiUrl: string = 'https://app.my-mobilekey.com/repro/api/usergate/v10/lock-system/performRequest';
    interface IAPIOptions {
        method: string,
        headers: {
            "Cookie": string,
            "Content-Type": string,
        },
        body: string
    }
    let body: string;
    switch (requestType) {
        case APIREQUEST.ListLocks:
            body = `{"$type":"${"SimonsVoss.Soho.Services.UserGate.DTO.ListLocksRequest"}, SimonsVoss.Soho.Services.UserGate","version":""}`;
            break;
        case APIREQUEST.OpenLock:
            if (!id) {
                return new Response("no id specified", { status: 400 })
            }
            body = `{"$type":"${"SimonsVoss.Soho.Services.UserGate.DTO.OpenLockRequest"}, SimonsVoss.Soho.Services.UserGate","lockID":"${id!}","version":""}`;
            break;
    }
    const options: IAPIOptions = {
        method: 'POST',
        headers: {
            'Cookie': authorizationCookie,
            "Content-Type": "application/json; charset=utf-8",
        },
        body: body
    };
    return fetch(apiUrl, options)
}
export enum APIREQUEST {
    ListLocks = "SimonsVoss.Soho.Services.UserGate.DTO.ListLocksRequest",
    OpenLock = "SimonsVoss.Soho.Services.UserGate.DTO.OpenLockRequest",
}
export async function getAuthorizationCookie(authorizationString: string) {
    const apiUrl: string = 'https://app.my-mobilekey.com/repro/api/usergate/v10/auth/do';
    interface IAPIOptions {
        method: string,
        headers: {
            "Authorization": string,
        },
    }
    const options: IAPIOptions = {
        method: 'GET',
        headers: {
            'Authorization': authorizationString,
        }
    };
    const response = await fetch(apiUrl, options)
    //console.log(response);
    if (await response.text() == "false") {
        return false;
    }
    //await console.log(response.headers)
    return await response.headers.getSetCookie().shift();
}