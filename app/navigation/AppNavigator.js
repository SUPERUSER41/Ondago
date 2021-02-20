import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import AppLogo from '../components/AppLogo';
import MainScreen from '../screens/MainScreen';
import PayScreen from '../screens/PayScreen';
import RewardPoints from '../components/RewardPoints';

import colors from '../config/colors';
import GiftCardScreen from '../screens/GiftCardScreen';

const Stack = createStackNavigator();

const mainScreenOptions = {
	headerStyle: {
		backgroundColor: colors.primary,
		shadowRadius: 0,
		shadowOffset: {
			height: 0,
		},
	},
	headerTintColor: colors.white,
	headerLeftContainerStyle: { marginLeft: 10 },
	headerLeft: () => (
		<Ionicons name="ios-close" size={36} color={colors.white} />
	),
	headerTitle: () => <AppLogo />,
	headerRightContainerStyle: { marginRight: 10 },
	headerRight: () => <RewardPoints />,
};

const payScreenOptions = {
	headerBackTitle: 'Home',
	headerStyle: {
		backgroundColor: colors.primary,
		shadowRadius: 0,
		shadowOffset: {
			height: 0,
		},
	},
	headerTintColor: colors.white,
	headerLeftContainerStyle: { marginLeft: 10 },
	headerTitleContainerStyle: {
		alignSelf: 'center',
		alignItems: 'center',
	},
	headerTitle: <RewardPoints isPayScreen={true} />,
	headerRightContainerStyle: { marginRight: 10 },
};
const giftCardScreenOptions = {
	headerLeftContainerStyle: { marginLeft: 10 },
	headerRightContainerStyle: { marginRight: 10 },
};

const AppNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				options={mainScreenOptions}
				name="Main"
				component={MainScreen}
			/>
			<Stack.Screen
				options={payScreenOptions}
				name="Pay"
				component={PayScreen}
			/>
			<Stack.Screen
				options={giftCardScreenOptions}
				name="GiftCard"
				component={GiftCardScreen}
			/>
		</Stack.Navigator>
	);
};

export default AppNavigator;
