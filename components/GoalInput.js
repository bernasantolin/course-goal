import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, Button } from "react-native";

const GoalInput = ({ onAddGoal, onCancel }) => {

    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandle = (enteredGoal) => {
        setEnteredGoal(enteredGoal);
    }

    const handleAddEnteredGoal = () => {
        if(onAddGoal instanceof Function){
            onAddGoal(enteredGoal);
        }
        setEnteredGoal(enteredGoal=>null);
    }

    const handleOnCancel = () => {
        if(onCancel instanceof Function){
            onCancel();
        }
        setEnteredGoal(enteredGoal=>null);
    }
    
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Course Goal"
                style={styles.textInput}
                onChangeText={goalInputHandle}
                value={enteredGoal}
            />
            <View style={styles.button}>
                <Button
                    title="ADD"
                    onPress={handleAddEnteredGoal}
                />
            </View>
            <View style={styles.button}>
                <Button
                    color="red"
                    title="CANCEL"
                    onPress={handleOnCancel}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        // alignItems:"center",
        alignContent:"space-between"
    },
    textInput:{
        borderColor:"black",
        borderWidth:1,
        padding:10,
        width:'80%',
        marginVertical:5,
        alignSelf:"center"
    },
    buttonStyle:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:"60%",
        marginTop:30
    },
    button:{
        marginVertical:5,
        width:"80%",
        alignSelf:"center"
    }
})

export default GoalInput;