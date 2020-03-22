import React from "react";
import {Button, Text} from "@ui-kitten/components";
import {connect} from "react-redux";
import DuelContainer from "../../state/DuelContainer";
import PendingDuel from "../../state/PendingDuel";
import Duel from "../../state/Duel";
import {showDuel} from "../../actions/Duel";
import AppState from "../../state/App";

const StartedDuelButton = (props: { duel: Duel, showDuel: (duel: Duel) => void }) => (
    <Button onPress={() => props.showDuel(props.duel)}>{`Duell gegen ${props.duel.opponent.name}`}</Button>
);

const PendingDuelButton = (props: { duel: PendingDuel, showDuel: (duel: PendingDuel) => void }) => (
    <Button onPress={() => props.showDuel(props.duel)}>Ausstehendes Duell</Button>
);

const DuelList = (props: { duels: DuelContainer, showDuel: (duel: Duel | PendingDuel) => void }) => (
    <React.Fragment>
        {props.duels.started.map(duel => <StartedDuelButton duel={duel} {...props} key={duel.gameId}/>)}
        {props.duels.pending.map(duel => <PendingDuelButton duel={duel} {...props} key={duel.gameId}/>)}
    </React.Fragment>
);

const DuelListSwitch = (props: { duels: DuelContainer, showDuel: (duel: Duel | PendingDuel) => void }) => (
    (props.duels.pending.length + props.duels.started.length) == 0
        ? <Text>Du hast noch keine Duelle.</Text>
        : <DuelList {...props}/>
);

const mapStateToProps = (state: AppState) => {
    return {
    duels: state.duels
}};
const mapDispatchToProps = dispatch => ({
    showDuel: (duel: Duel | PendingDuel) => dispatch(showDuel(duel))
});

export default connect(mapStateToProps, mapDispatchToProps)(DuelListSwitch);
