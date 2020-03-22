import React from 'react';
import {ApplicationProvider} from "@ui-kitten/components";
import {light, mapping} from "@eva-design/eva";
import store from "./store";
import {Provider as ReduxStoreProvider} from "react-redux";
import Router from "./components/Router";
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from "redux-persist";

export default () => (
    <ReduxStoreProvider store={store}>
        <PersistGate persistor={persistStore(store)}>
            <ApplicationProvider mapping={mapping} theme={light}>
                <Router/>
            </ApplicationProvider>
        </PersistGate>
    </ReduxStoreProvider>
)
