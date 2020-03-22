import {ADD_PENDING_DUEL, DuelAction, FORGET_PENDING_DUEL, POP_DUEL, SHOW_DUEL} from "../actions/Duel";
import DuelContainer from "../state/DuelContainer";

export default function duelReducer(state: DuelContainer = {started: [], pending: []}, action: DuelAction): DuelContainer {
    switch (action.type) {
        case ADD_PENDING_DUEL:
            return {...state, visible: action.duel, pending: state.pending.concat(action.duel)};
        case POP_DUEL:
            return {...state, visible: undefined};
        case SHOW_DUEL:
            return {...state, visible: action.duel};
        case FORGET_PENDING_DUEL:
            return {...state, pending: state.pending.filter(d => d.gameId != action.duel.gameId)};
        default:
            return state;
    }
}
