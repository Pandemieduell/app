import React from "react";
import {Button, Card, Layout, Text} from "@ui-kitten/components";
import {connect} from "react-redux";

function DuelListScreen(props: { onGameStarted: () => void }) {
    return (
        <Layout level='3' style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button onPress={() => props.onGameStarted()} style={{width: '90%'}}>
                Neues Duell starten
            </Button>
            <Button style={{width: '90%'}}>Einem Duell beitreten</Button>
            <Card style={{width: '90%'}}>
                <Text>Deine Duelle</Text>
            </Card>
        </Layout>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch, props) {
    return {
        onGameStarted: () => {
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DuelListScreen);
