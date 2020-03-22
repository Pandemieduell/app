import base64 from "base-64";
import {unexpectedResponseError} from "./ErroHandler";
import PlayerCredentials from "../state/PlayerCredentials";

export function withDefaultHeaders(existingHeaders: HeadersInit = {}): HeadersInit {
    return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...existingHeaders
    }
}


export function withAuthorization(player: PlayerCredentials, existingHeaders: HeadersInit = {}): HeadersInit {
    return {
        Authorization: 'Basic ' + base64.encode(`${player.id}:${player.token}`),
        ...existingHeaders
    }
}

export function expectOkJson(): (response: Response) => Promise<unknown> {
    return response => {
        if (!response.ok) {
            throw unexpectedResponseError(response)
        }
        return response.json()
    }
}
