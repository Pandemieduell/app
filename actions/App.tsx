import {PlayerAction, SetMe} from "./Player";
import {DuelAction} from "./Duel";

export const DELETE_DATA = "DELETE_DATA";

export interface DeleteData {
    type: typeof DELETE_DATA
}

export function deleteData() {
    return {
        type: DELETE_DATA
    }
}

export type AppAction = DeleteData | DuelAction | PlayerAction;
export default AppAction
