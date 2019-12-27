import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TodoItem = (props) => {
	return (
		<TouchableOpacity
			activeOpacity={0.2}
			onPress={props.onDelete.bind(this, props.id)}
		>
			<View>
				<Text style={styles.text}>{props.title}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	text: {
		color: "red",
		textTransform: "uppercase",
		textAlign: "center",
		backgroundColor: "#67E6DC",
		borderRadius: 10,
		marginTop: 10,
		padding: 10
	}
});

export default TodoItem;
