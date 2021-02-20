import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

const LOGO = require('../assets/logo.png');
const APPNAME = 'Ondago  ';

const AppLogo = () => {
	return (
		<View style={styles.container}>
			{/* <Image source={LOGO} /> */}
			<Text style={styles.logo}>{APPNAME}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		color: colors.white,
		fontSize: 30,
		fontWeight: 'bold',
	},
});
export default AppLogo;
