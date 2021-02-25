import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import colors from '../config/colors';

const PLACEHOLDER = 'Search restaurants and stores';

const AppSearch = () => {
	const [query, setQuery] = useState('');

	const search = (searchQuery) => {};

	return (
		<View style={styles.container}>
			<View style={styles.search}>
				<TextInput
					style={styles.input}
					placeholder={PLACEHOLDER}
					placeholderTextColor={colors.white}
					onChangeText={(text) => search(text)}
					clearButtonMode="always"
					value={query}
				/>
				<Ionicons name="ios-search" size={20} color={colors.white} />
			</View>
			{/* <View style={styles.map}>
				<FontAwesome5 name="map" size={27} color={colors.white} />
			</View> */}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		marginTop: 15,
		alignItems: 'center',
		flexDirection: 'row',
	},
	map: {
		marginLeft: 20,
	},
	search: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'white',
		borderWidth: 1,
		height: 60,
		paddingRight: 20,
		borderRadius: 30,
	},
	input: {
		flex: 1,
		paddingLeft: 20,
		color: 'white',
	},
});

export default AppSearch;
