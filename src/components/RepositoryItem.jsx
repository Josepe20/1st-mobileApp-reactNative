import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const RepositoryHeaders = (repo) => {
    return (
        <View style={{ flexDirection: 'row', paddingBottom: 2, }}>
            <View style={{paddingRight: 10}}>
                <Image style={styles.image} source={{ uri: repo.ownerAvatarUrl }} />
            </View>
            
            <View style={{ flex: 1, justifyContent: 'center', }}>
                <StyledText fontWeight='bold' fontSize='subheading'>{repo.fullName}</StyledText>
                <StyledText color='secondary'>{repo.description}</StyledText>
                <StyledText style={styles.language}>{repo.language}</StyledText>
            </View>
        </View>
    )
}

export default function RepositoryItem(repo) {
    return (
        <View key={repo.id} style={styles.container}>
            <RepositoryHeaders {...repo} />
            <RepositoryStats {...repo} />
        </View>    
    )  
};

const styles = StyleSheet.create ({
    container: {
        padding: 20,  
        paddingVertical: 5,
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        marginVertical: 4,
        borderRadius: 4,
        overflow: 'hidden',
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4,
    }
})