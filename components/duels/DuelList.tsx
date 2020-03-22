import React from "react";
import Duel from "../../state/Duel";
import {Text} from "@ui-kitten/components";
import {connect} from "react-redux";


const DuelList = (props: { duels: Duel[] }) => (
    props.duels.length == 0
        ? <Text>Du hast noch keine Duelle.</Text>
        : <Text></Text>
);

const mapStateToProps = state => ({
    duels: state.duels
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DuelList);
