import React from "react";
import {Card, Layout, Text} from "@ui-kitten/components";

function DuellScreen(props: {}) {
    return (
        <Layout level='3' style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Card style={{width: '90%'}}>
                <Text>Log</Text>
            </Card>
            <Card style={{width: '90%'}}>
                <Text>Resources</Text>
            </Card>
            <Card style={{width: '90%'}}>
                <Text>4 Karten zur Auswahl</Text>
            </Card>
        </Layout>
    )
}


function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch, props) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DuelScreen);
