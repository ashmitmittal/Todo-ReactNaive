import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

function TodoInput(props) {
	const [task, setTask] = useState("");
	const HandelText = (text) => {
		setTask(text);
	};

	const addTaskHandler = () => {
		props.onAddTodo(task);
		setTask("");
	};

	return (
		<Modal visible={props.visible} animationType="slide">
			<View
				style={{
					justifyContent: "center",
					alignItems: "center",
					flex: 1
				}}
			>
				<TextInput
					placeholder="ADD TASK"
					style={styles.input}
					onChangeText={HandelText}
					value={task}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title=" ADD " onPress={addTaskHandler} />
					</View>
					<View style={styles.button}>
						<Button color="#E84342" title="Cancel" onPress={props.onCancel} />
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	input: {
		width: "80%",
		borderBottomColor: "black",
		borderWidth: 0.5,
		borderRadius: 10,
		padding: 10,
		marginBottom: 10
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "60%"
	},
	button: {
		width: "40%"
	}
});

export default TodoInput;
