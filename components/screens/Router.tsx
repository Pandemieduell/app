import React from "react";
import DuelListScreen from "./DuelListScreen";
import SignupScreen from "./SignupScreen";
import {connect} from "react-redux";


function Router(props: { userWasCreated: boolean }) {
    return props.userWasCreated
        ? <DuelListScreen/>
        : <SignupScreen/>;
}

const mapStateToProps = (state) => ({
    userWasCreated: state.me.player !== undefined
});

const mapDispatchToProps = (dispatch, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
