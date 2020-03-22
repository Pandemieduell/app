import React, {useState} from "react";
import {Button, Card, Input, Layout, Text} from "@ui-kitten/components";
import {createPlayer} from "../controller/Player";
import {setMe} from "../actions/Player";
import {connect} from "react-redux";

function SignupScreen(props: { onNameProvided: (name: string) => void }) {
    const [currentName, setCurrentName] = useState('');
    return (
        <Layout level='3' style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Layout style={{flex: 1}}/>
            <Card style={{width: '90%'}}>
                <Text category='h1'>Willkommen!</Text>
                <Text category='s1'>Bevor es los geht: Wie sollen wir dich nennen?</Text>
                <Input size='large' placeholder='Weltretter' style={{marginTop: 24, marginBottom: 16}}
                       onChangeText={setCurrentName}
                       onSubmitEditing={() => props.onNameProvided(currentName)}>{currentName}</Input>
                <Button onPress={() => props.onNameProvided(currentName)}>Los geht’s!</Button>
             </Card>
            <Layout style={{flex: 2}}/>
        </Layout>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch, props) {
    return {
        onNameProvided: (name: string) => {
            createPlayer(name).then(player => dispatch(setMe(player)))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
