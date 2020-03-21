import React from "react";
import {Button, Card, Input, Layout, Text} from "@ui-kitten/components";

export default () => (
    <Layout style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Layout style={{flex: 1}} />
        <Card style={{width: '90%'}}>
            <Text category='h1'>Willkommen!</Text>
            <Text category='s1'>Bevor es los geht: Wie sollen wir dich nennen?</Text>
            <Input size='large' placeholder='Weltretter' style={{marginTop: 24, marginBottom: 16}} />
            <Button>Los geht’s!</Button>
        </Card>
        <Layout style={{flex: 2}} />
    </Layout>
)
