import React from "react";
import {Button, Layout, Spinner, Text} from "@ui-kitten/components";
import {StyleSheet} from "react-native";
import {createDuel, deleteAndForgetPendingDuel} from "../../actions/Duel";
import {connect} from "react-redux";
import AppState from "../../state/App";
import PendingDuel from "../../state/PendingDuel"
import theme from "../../theme";

const StartRandomDuelButton = (props: { createDuel: (random: boolean) => void }) => (
    <Button onPress={() => props.createDuel(true)} style={styles.largeButton}>
        Duell gegen zufälligen Gegner starten
    </Button>
);

const SearchingOpponentIndicator = (props: { deleteAndForget: () => void }) => (
    <Layout style={[styles.largeButton, styles.opponentSearchIndicator]}>
        <Spinner size='large'/>
        <Text style={styles.opponentSearchIndicatorText}>Suche Gegner…</Text>
        <Button onPress={props.deleteAndForget} style={{marginRight: 8}}>x</Button>
    </Layout>
);

const DuelLauncher = (props: { createDuel: (random: boolean) => void, pendingRandomDuel?: PendingDuel, deleteAndForgetDuel: (duel: PendingDuel) => void }) => (
    <React.Fragment>
        <Button onPress={() => props.createDuel(false)} style={styles.largeButton}>
            Duell gegen Freund starten
        </Button>
        {!!props.pendingRandomDuel
            ? <SearchingOpponentIndicator deleteAndForget={() => props.deleteAndForgetDuel(props.pendingRandomDuel)}/>
            : <StartRandomDuelButton createDuel={props.createDuel}/>
        }
    </React.Fragment>
);

const styles = StyleSheet.create({
    largeButton: {
        width: '90%',
        marginBottom: 20,
        height: 55
    },
    opponentSearchIndicator: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 20,
        backgroundColor: theme['background-basic-color-4']
    },
    opponentSearchIndicatorText: {
        flex: 1,
        marginLeft: 20,
        color: theme['text-alternate-color']
    }
});


const mapStateToProps = (state: AppState) => ({
    pendingRandomDuel: state.duels.pending.find(duel => duel.random)
});

const mapDispatchToProps = (dispatch, props) => ({
    createDuel: (random: boolean) => {
        dispatch(createDuel(random))
    },
    deleteAndForgetDuel: (duel: PendingDuel) => {
        dispatch(deleteAndForgetPendingDuel(duel))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DuelLauncher)
