import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import OfferScreen from '../screens/OfferScreen';

import colors from '../config/colors';

const Tab = createMaterialTopTabNavigator();

const AppTabNavigator = ({ tab1Name, tab2Name }) => (
	<Tab.Navigator
		tabBarOptions={{
			activeTintColor: colors.primary,
			inactiveTintColor: colors.secondary,
			labelStyle: {
				textTransform: 'capitalize',
				fontSize: 16,
				fontWeight: '500',
			},
		}}
	>
		<Tab.Screen name={tab1Name} component={OfferScreen} />
		<Tab.Screen name={tab2Name} component={OfferScreen} />
	</Tab.Navigator>
);
export default AppTabNavigator;
