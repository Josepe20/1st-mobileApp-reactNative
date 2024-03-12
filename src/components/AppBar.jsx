import React from "react";
import { ViewProps, StyleSheet, View } from "react-native";
import theme from "../theme";
import StyledText from "./StyledText";
import { StatusBar } from "expo-status-bar";


export default function AppBar() {

    return (
        <View style={StyleSheet.container}>
            <StyledText fontSize='bold' style={styles.text}>
                Repositories
            </StyledText>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    text: {
        color: theme.appBar.primarytext,
    }
})
