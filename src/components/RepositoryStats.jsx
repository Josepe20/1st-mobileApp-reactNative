import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StyledText from "./StyledText";

const parseThousands = value => {
    return value >= 1000
        ? `${Math.round(value / 100)/ 10}k`: String(value)
};


const RepositoryStats = repo => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View>
            <StyledText align='center' fontWeight='bold'>{parseThousands(repo.forksCount)}</StyledText>
                <StyledText align='center'>forks</StyledText>
            </View>

            <View>
                <StyledText align='center' fontWeight='bold'>{parseThousands(repo.stargazersCount)}</StyledText>
                <StyledText align='center'>stars</StyledText>
            </View>

            <View>
                <StyledText align='center' fontWeight='bold'>{parseThousands(repo.ratingAverage)}</StyledText>
                <StyledText align='center'>rating</StyledText>
            </View>

            <View>
                <StyledText align='center' fontWeight='bold'>{parseThousands(repo.reviewCount)}</StyledText>
                <StyledText align='center'>review</StyledText>
            </View>   
        </View>
    )
};

export default RepositoryStats;