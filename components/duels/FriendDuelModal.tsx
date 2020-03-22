import React from "react";
import PendingDuel from "../../state/PendingDuel";
import {Button, Layout, Modal, Text} from "@ui-kitten/components";
import AppState from "../../state/App";
import {connect} from "react-redux";
import {StyleSheet} from "react-native";
import {popDuel} from "../../actions/Duel";

const FriendDuelModal = (props: { duel?: PendingDuel, close: () => void }) => {
    return (
        <Modal visible={!!props.duel}>
            <Layout level='2' style={styles.container}>
                <Text key="desc" category="h6">Deine Duell-ID:</Text>
                <Text key="id">{props.duel ? props.duel.gameId : ''}</Text>
                <Button onPress={props.close}>OK</Button>
            </Layout>
        </Modal>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    id: {

    }
});

const mapStateToProps = (state: AppState) => ({
    duel: state.duels.visible && state.duels.visible.pending && !state.duels.visible.random ? state.duels.visible : undefined
});

const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch(popDuel())
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendDuelModal)
