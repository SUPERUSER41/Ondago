import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import AppHeader from '../components/AppHeader';
import FAB from '../components/FAB';
import AppTabNavigator from '../navigation/AppTabNavigator';
import MyGiftCardsScreen from './MyGiftCardsScreen';
import OfferScreen from './OfferScreen';

const MainScreen = () => {
	const [tabs, setTabs] = useState([
		{ name: 'Nearby ', component: OfferScreen },
		{ name: 'Online ', component: View },
	]);

	const handleFABClick = () => {
		setTabs([
			{ name: 'Available ', component: MyGiftCardsScreen },
			{ name: 'Redeemed ', component: MyGiftCardsScreen },
		]);
	};

	return (
		<View style={styles.container}>
			<AppHeader />
			<AppTabNavigator tabs={tabs} />
			<View style={styles.buttonContainer}>
				<FAB
					onPress={handleFABClick}
					iconName="store"
					title="Marketplace"
					isActive={true}
				/>
				<FAB
					onPress={handleFABClick}
					iconName="card-giftcard"
					title="My eGift Cards"
					isActive={false}
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
