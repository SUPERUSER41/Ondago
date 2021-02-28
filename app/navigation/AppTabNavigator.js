import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../config/colors';

const Tab = createMaterialTopTabNavigator();

const AppTabNavigator = ({ tabs }) => (
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
		{tabs.map((tab, index) => (
			<Tab.Screen key={index} name={tab.name} component={tab.component} />
		))}
	</Tab.Navigator>
);
export default AppTabNavigator;
