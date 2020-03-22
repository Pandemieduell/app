import {createStore} from 'redux'
import appReducer from "./reducers/App"
import AppState from "./state/App";

const initialState: AppState = {
    me: {
        player: undefined
    }
};

const store = createStore(appReducer, initialState);
export default store
