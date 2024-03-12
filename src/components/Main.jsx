import React from "react";
import { Text, View, SafeAreaView, StatusBar } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";

export default function Main() {
 
    return (
        <SafeAreaView style={{ flexGrow: 1 }}>
            <StatusBar barStyle="default" />
            {/* <AppBar /> */}

            <View style={{flexGrow: 1}}>
                <RepositoryList />
            </View>
        </SafeAreaView>
    )
};