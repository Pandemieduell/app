import PrivatePlayer from "../state/PrivatePlayer";
import {createPlayer} from "../controller/Player";

export const CREATE_ME = 'CREATE_ME';
export const SET_ME = 'SET_ME';

export interface CreateMe {
    type: typeof CREATE_ME,
    name: string
}

export interface SetMe {
    type: typeof SET_ME,
    me?: PrivatePlayer
}

export function setMe(me: PrivatePlayer): SetMe {
    return {type: SET_ME, me}
}

export function createMe(name: string) {
    return dispatch => {
        dispatch({type: CREATE_ME, name});
        createPlayer(name)
           .then(player => dispatch({type: SET_ME, me: player}));
    }
}

export type PlayerAction = SetMe | CreateMe
