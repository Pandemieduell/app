import config from "../config";
import PlayerCredentials from "../state/PlayerCredentials";
import {expectOkJson, withAuthorization, withDefaultHeaders} from "./http";
import PendingDuel from "../state/PendingDuel";

export function createDuelId(me: PlayerCredentials, random: boolean): Promise<PendingDuel> {
    return fetch(`${config.baseUrl}/games?random=${random}`, {
        method: 'POST',
        headers: withAuthorization(me, withDefaultHeaders()),
        body: '{}'
    })
        .then(expectOkJson())
        .then(body => (body as { gameId: string }))
        .then(body => ({random, ...body, pending: true}));
}

export function deletePendingDuel(me: PlayerCredentials, duelId: string): Promise<void> {
    return fetch(`${config.baseUrl}/games/${duelId}`, {
        method: 'DELETE',
        headers: withAuthorization(me, withDefaultHeaders())
    })
        .then(expectOkJson()) as Promise<void>;
}
