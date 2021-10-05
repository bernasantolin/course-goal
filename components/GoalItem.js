import React from "react";
import { StyleSheet, View, Text,  TouchableOpacity } from "react-native";

const GoalItem = ({ title, onDelete }) => {
    return (
        <TouchableOpacity activeOpacity={0.2} onPress={onDelete}>
            <View style={styles.listItem}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        borderWidth:1,
        marginTop:5,
    }
});

export default GoalItem;

