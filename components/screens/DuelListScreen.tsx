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
import {createDuel} from "../../actions/Duel";
import CreatedDuel from "../../state/PendingDuel";
import FriendDuelModal from "../duels/FriendDuelModal";
import {deleteData} from "../../actions/App";
import DuelLauncher from "../duels/DuelLauncher";

const MenuIcon = (style) => (<Icon {...style} name='more-vertical'/>);

const menuData = [
    {
        title: 'About'
    },
    {
        title: 'Logout'
    },
];

function DuelListScreen(props: { createDuel: (random: boolean) => void, deleteData: () => void, createdDuel?: CreatedDuel }) {
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
            <TopNavigation title='' style={styles.navigation}/>
            <Layout level='4' style={{flex: 3, justifyContent: 'flex-start', alignItems: 'center'}}>
                <Card style={styles.duelList}
                      header={() => <CardHeader title='Deine Duelle' style={styles.duelListHeader}/>}>
                    <DuelList/>
                </Card>
                <Button onPress={props.deleteData}>Delete All Data</Button>
            </Layout>
            <Layout level='4' style={{flex: 0, justifyContent: 'flex-start', alignItems: 'center'}}>
                <DuelLauncher/>
            </Layout>
            <FriendDuelModal/>
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
    createDuel: (random: boolean) => {
        dispatch(createDuel(random))
    },
    deleteData: () => dispatch(deleteData())
});

export default connect(mapStateToProps, mapDispatchToProps)(DuelListScreen);
