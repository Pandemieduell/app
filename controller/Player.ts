import config from "../config";
import {expectOkJson, withDefaultHeaders} from "./http";
import PrivatePlayer from "../state/PrivatePlayer";

const TOKEN_LENGTH = 50;

function createToken(): string {
    // creates TOKEN_LENGTH characters from [a-z0-9]
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    return [...Array(TOKEN_LENGTH)].map(() => Math.random().toString(36)[2]).join('')
}

export function createPlayer(name: string): Promise<PrivatePlayer> {
    const token = createToken();
    return fetch(`${config.baseUrl}/players`, {
        method: 'POST',
        headers: withDefaultHeaders(),
        body: JSON.stringify({name, token})
    })
        .then(expectOkJson())
        .then(body => body as PrivatePlayer)
}
