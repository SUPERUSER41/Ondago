import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';

const TITLE = 'eGift Card Terms & Conditions  ';

const GiftCardTermsScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.titleCloseContainer}>
				<Text style={styles.title}>{TITLE}</Text>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Ionicons name="ios-close" size={40} color={colors.black} />
				</TouchableOpacity>
			</View>
			<Text style={styles.brand}>AMC</Text>
			<Text style={styles.terms}>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
				ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
				dis parturient montes, nascetur ridiculus mus. Donec quam felis,
				ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
				quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
				arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
				Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
				dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
				tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
		paddingVertical: 20,
		borderRadius: 10,
		backgroundColor: colors.white,
		margin: 20,
	},
	titleCloseContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18,
	},
	brand: {
		fontSize: 26,
		marginVertical: 10,
		fontWeight: 'bold',
	},
	terms: {
		fontSize: 18,
		lineHeight: 22,
	},
});

export default GiftCardTermsScreen;
