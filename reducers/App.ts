import playerReducer from "./Player";
import { AsyncStorage } from "react-native";
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers } from "redux";
import duelReducer from "./Duel";
import AppState from "../state/App";
import AppAction, { DELETE_DATA } from "../actions/App";

const appPersistConfig = {
  key: "app",
  storage: AsyncStorage,
  blacklist: ["me"]
};

const childReducers = combineReducers({
  me: playerReducer,
  duels: duelReducer
});

const initialState: AppState = {
  me: {
    player: undefined
  },
  duels: {
    started: [],
    pending: []
  }
};

function appReducer(
  state: AppState = initialState,
  action: AppAction
): AppState {
  switch (action.type) {
    case DELETE_DATA:
      return initialState;
    default:
      return childReducers(state, action);
  }
}

export default persistReducer(appPersistConfig, appReducer);
