import PrivatePlayer from "../state/PrivatePlayer";

export const SET_ME = 'SET_ME';

export interface SetMe {
    type: typeof SET_ME,
    me: PrivatePlayer
}

export function setMe(me: PrivatePlayer): SetMe {
    return {type: SET_ME, me}
}

export type PlayerAction = SetMe
