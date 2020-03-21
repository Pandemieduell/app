import React from 'react';
import SignupScreen from "./components/SignupScreen";
import {ApplicationProvider} from "@ui-kitten/components";
import {mapping, light} from "@eva-design/eva";

export default () => (
    <ApplicationProvider mapping={mapping} theme={light}>
        <SignupScreen />
    </ApplicationProvider>
)
