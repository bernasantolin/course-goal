import React, { useState } from 'react';
import { Button, StyleSheet, FlatList, View, Modal } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {

    const [courseGoals, setCourseGoals] = useState([]);
    const [modal, setModal] = useState(false);

    const addGoalHandle = (enteredGoal) => {
        setCourseGoals(courseGoals=>[
            ...courseGoals,{
                id: Math.random().toString(),
                value: enteredGoal
            }
        ]);

        setModal(false);
    }

    const handleRemoveGoal = (id) => {
        setCourseGoals(courseGoals=>{
            return courseGoals.filter(data=>data.id !== id);
        })
    }

    return (
        <View style={styles.container}>
            <Modal visible={modal} animationType="slide">
                <GoalInput 
                    onAddGoal={addGoalHandle}
                    onCancel={()=>setModal(false)}
                />   
            </Modal>
            <Button 
                title="Add New Goal" 
                onPress={()=>setModal(true)}
            />
            <FlatList
                data={courseGoals}
                renderItem={data=>(
                    <GoalItem 
                        onDelete={handleRemoveGoal.bind(this, data.item.id)} 
                        title={data.item.value}
                        key={data.item.id} 
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:50
    },
});