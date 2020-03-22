import playerReducer from "./Player"
import {AsyncStorage} from "react-native";
import duelReducer from "./Duel";
import persistReducer from "redux-persist/es/persistReducer";
import {combineReducers} from "redux";

const appPersistConfig = {
    key: 'app',
    storage: AsyncStorage,
    blacklist: ['me']
};

export default persistReducer(appPersistConfig, combineReducers({me: playerReducer, duels: duelReducer}));
