import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import DuelListScreen from "./DuelListScreen";
import SignupScreen from "./SignupScreen";
import {connect} from "react-redux";

const MainStack = createStackNavigator();


function Router(props: { userWasCreated: boolean }) {
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                {props.userWasCreated
                    ? <MainStack.Screen
                        name="Duelliste"
                        component={DuelListScreen}/>
                    : <MainStack.Screen
                        name="Spieler erstellen"
                        component={SignupScreen}
                    />
                }
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

function mapStateToProps(state) {
    return {
        userWasCreated: state.me.player !== undefined
    }
}

function mapDispatchToProps(dispatch, props) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);
