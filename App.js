import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import TodoItem from "./components/TodoItems";
import TodoInput from "./components/TodoInput";

function App() {
	const [tasks, setTasks] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const HandelSubmit = (TodoTask) => {
		if (TodoTask.length === 0) {
			return;
		}
		setTasks((currentTask) => [
			...currentTask,
			{ id: Math.random().toString(), value: TodoTask }
		]);
		setIsAddMode(false);
	};

	const HandelRemove = (TodoId) => {
		setTasks((currentTask) => {
			return currentTask.filter((task) => task.id !== TodoId);
		});
	};

	const cancelTaksAddHandler = () => {
		setIsAddMode(false);
	};

	return (
		<View style={styles.screen}>
			<Button title="Add New Todo" onPress={() => setIsAddMode(true)} />
			<TodoInput
				visible={isAddMode}
				onCancel={cancelTaksAddHandler}
				onAddTodo={HandelSubmit}
			/>
			<FlatList
				keyExtractor={(item) => item.id}
				data={tasks}
				renderItem={(t) => (
					<TodoItem
						id={t.item.id}
						onDelete={HandelRemove}
						title={t.item.value}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 30
	}
});

export default App;
