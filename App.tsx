import React from 'react';
import {ApplicationProvider, IconRegistry} from "@ui-kitten/components";
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping} from "@eva-design/eva";
import {Provider as ReduxStoreProvider} from "react-redux";
import Router from "./components/screens/Router";
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from "redux-persist";
import theme from "./theme"
import {applyMiddleware, createStore} from "redux";
import appReducer from "./reducers/App";
import thunkMiddleware from 'redux-thunk'
import {SafeAreaProvider} from "react-native-safe-area-context";

const store = createStore(appReducer, applyMiddleware(thunkMiddleware));
const persistor = persistStore(store);

export default () => (
    <ReduxStoreProvider store={store}>
        <PersistGate persistor={persistor}>
            <IconRegistry icons={EvaIconsPack}/>
            <ApplicationProvider mapping={mapping} theme={theme}>
                <SafeAreaProvider>
                    <Router/>
                </SafeAreaProvider>
            </ApplicationProvider>
        </PersistGate>
    </ReduxStoreProvider>
)
