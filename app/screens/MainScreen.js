import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppHeader from '../components/AppHeader';
import FAB from '../components/FAB';
import AppTabNavigator from '../navigation/AppTabNavigator';

const MainScreen = () => {
	return (
		<View style={styles.container}>
			<AppHeader />
			<AppTabNavigator />
			<View style={styles.buttonContainer}>
				<FAB iconName="store" title="Marketplace" isActive={true} />
				<FAB iconName="card-giftcard" title="My eGift Cards" isActive={false} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	buttonContainer: {
		position: 'absolute',
		bottom: 30,
		flexDirection: 'row',
		paddingHorizontal: 10,
		width: '100%',
		justifyContent: 'space-between',
		zIndex: 2,
	},
});

export default MainScreen;
