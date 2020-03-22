import MeState from "../state/Me";
import {PlayerAction, SET_ME} from "../actions/Player";
import createSecureStore from "redux-persist-expo-securestore";
import { persistStore, persistReducer } from 'redux-persist'

const secureStorage = createSecureStore();

const mePersistConfig = {
    key: 'me',
    storage: secureStorage
};

function playerReducer(state: MeState = {player: undefined}, action: PlayerAction): MeState {
    switch (action.type) {
        case SET_ME:
            return {
                ...state,
                player: action.me
            };
        default:
            return state;
    }
}

export default persistReducer(mePersistConfig, playerReducer);
