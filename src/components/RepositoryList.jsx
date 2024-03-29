import React from "react";
import { Text, View, FlatList } from "react-native";
import repositories from "../data/repositories";
import RepositoryItem from "./RepositoryItem";

export default function RepositoryList() {
 
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text></Text> }
            renderItem={({ item: repo }) => (
                 <RepositoryItem {...repo} />
            )}
        />
    )
};