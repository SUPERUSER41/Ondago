import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../config/colors';

const FAB = ({ title, iconName, isActive = false, onPress }) => {
	const buttonText = () => {
		return {
			color: isActive ? colors.white : colors.black,
			fontSize: 16,
		};
	};
	const button = () => {
		return {
			backgroundColor: isActive ? colors.primary : colors.inactiveButton,
			borderRadius: 30,
			alignItems: 'center',
			justifyContent: 'center',
			paddingLeft: 9,
			paddingRight: 20,
			flexDirection: 'row',
			paddingVertical: 10,
		};
	};
	return (
		<TouchableOpacity activeOpacity={0.07} onPress={onPress}>
			<View style={button()}>
				<View style={styles.buttonIcon}>
					<MaterialIcons name={iconName} size={24} color={colors.black} />
				</View>
				<Text style={buttonText()}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	buttonIcon: {
		alignItems: 'center',
		backgroundColor: colors.white,
		padding: 9,
		marginRight: 9,
		borderRadius: 100,
		justifyContent: 'center',
	},
});

export default FAB;
