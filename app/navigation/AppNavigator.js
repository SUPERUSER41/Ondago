import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import colors from '../config/colors';

import AppLogo from '../components/AppLogo';
import MainScreen from '../screens/MainScreen';
import RewardPoints from '../components/RewardPoints';

const Stack = createStackNavigator();

const ondagoScreenOptions = {
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
  headerTitle: <AppLogo />,
  headerRightContainerStyle: { marginRight: 10 },
  headerRight: () => <RewardPoints />,
};

const AppNavigator = () => (
  <Stack.Navigator screenOptions={ondagoScreenOptions}>
    <Stack.Screen name="Ondago" component={MainScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
