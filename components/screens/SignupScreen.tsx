import React, {useState} from "react";
import {Button, Card, Input, Layout, Text} from "@ui-kitten/components";
import {createMe} from "../../actions/Player";
import {connect} from "react-redux";
import theme from "../../theme";

function SignupScreen(props: { onNameProvided: (name: string) => void }) {
    const [currentName, setCurrentName] = useState('');
    return (
        <Layout level='3' style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Layout style={{flex: 1}}/>
            <Card style={styles.card}>
                <Text category='h1'>Willkommen!</Text>
                <Text category='s1'>Bevor es los geht: Wie sollen wir dich nennen?</Text>
                <Input size='large' placeholder='Weltretter' style={styles.input}
                       onChangeText={setCurrentName}
                       onSubmitEditing={() => props.onNameProvided(currentName)}
                       textStyle={styles.inputText}
                >{currentName}</Input>
                <Button onPress={() => props.onNameProvided(currentName)}>Los geht’s!</Button>
            </Card>
            <Layout style={{flex: 2}}/>
        </Layout>
    )
}

const styles = {
    card: {
        width: '90%',
        backgroundColor: theme['background-basic-color-2']
    },
    input: {
        marginTop: 24,
        marginBottom: 16,
        backgroundColor: theme['input-background-color']
    },
    inputText: {
        color: theme['text-alternate-color']
    }
};

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, props) => ({
    onNameProvided: (name: string) => {
        dispatch(createMe(name))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
