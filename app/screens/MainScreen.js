import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import AppHeader from '../components/AppHeader';
import FAB from '../components/FAB';
import AppTabNavigator from '../navigation/AppTabNavigator';

const SCREENS = ['Marketplace', 'EGiftCards'];

const TABS = {
	nearby: 'Nearby ',
	online: 'Online ',
	available: 'Available ',
	redeemed: 'Redeemed ',
};

const MainScreen = () => {
	const [currentScreen, setCurrentScreen] = useState(SCREENS[0]);

	return (
		<View style={styles.container}>
			<AppHeader />
			{currentScreen === SCREENS[0] && (
				<AppTabNavigator tab1Name={TABS.nearby} tab2Name={TABS.online} />
			)}
			{currentScreen === SCREENS[1] && (
				<AppTabNavigator tab1Name={TABS.available} tab2Name={TABS.redeemed} />
			)}
			<View style={styles.buttonContainer}>
				<FAB
					onPress={() => setCurrentScreen(SCREENS[0])}
					iconName="store"
					title="Marketplace"
					isActive={currentScreen === SCREENS[0]}
				/>
				<FAB
					onPress={() => setCurrentScreen(SCREENS[1])}
					iconName="card-giftcard"
					title="My eGift Cards"
					isActive={currentScreen === SCREENS[1]}
				/>
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
