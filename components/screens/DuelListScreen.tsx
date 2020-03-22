import React from "react";
import {
    Button,
    Card,
    CardHeader,
    Icon,
    Layout,
    OverflowMenu,
    TopNavigation,
    TopNavigationAction
} from "@ui-kitten/components";
import {connect} from "react-redux";
import DuelList from "../duels/DuelList";
import {StyleSheet} from "react-native";
import theme from "../../theme";
import {SafeAreaView} from "react-native-safe-area-context";

const MenuIcon = (style) => (<Icon {...style} name='more-vertical'/>);

const menuData = [
    {
        title: 'About'
    },
    {
        title: 'Logout'
    },
];

function DuelListScreen(props: { onGameStarted: () => void }) {
    const [menuVisible, setMenuVisible] = React.useState(false);
    const toggleMenu = () => setMenuVisible(!menuVisible);

    const onMenuItemSelect = (index) => setMenuVisible(false);
    const renderMenuAction = () => (
        <OverflowMenu
            visible={menuVisible}
            data={menuData}
            onSelect={onMenuItemSelect}
            onBackdropPress={toggleMenu}>
            <TopNavigationAction
                icon={MenuIcon}
                onPress={toggleMenu}
            />
        </OverflowMenu>
    );

    return (
        <SafeAreaView style={styles.screen}>
            <TopNavigation title='Hi' style={styles.navigation}/>
            <Layout level='4' style={{flex: 3, justifyContent: 'flex-start', alignItems: 'center'}}>
                <Card style={styles.duelList}
                      header={() => <CardHeader title='Deine Duelle' style={styles.duelListHeader}/>}>
                    <DuelList/>
                </Card>
            </Layout>
            <Layout level='4' style={{flex: 0, justifyContent: 'flex-start', alignItems: 'center'}}>
                <Button onPress={() => props.onGameStarted()} style={styles.largeButton} size='large'>
                    Neues Duell starten
                </Button>
                <Button style={styles.largeButton} size='large'>Einem Duell beitreten</Button>
            </Layout>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: theme['background-basic-color-4'],
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    navigation: {
        backgroundColor: theme['background-basic-color-4']
    },
    largeButton: {
        width: '90%',
        marginBottom: 20
    },
    duelListHeader: {
        backgroundColor: theme['background-basic-color-2']
    },
    duelList: {
        width: '90%',
        backgroundColor: theme['background-basic-color-3']
    }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, props) => ({
    onGameStarted: () => {
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DuelListScreen);
