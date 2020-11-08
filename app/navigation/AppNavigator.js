import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import colors from '../config/colors';

import AppLogo from '../components/AppLogo';
import MainScreen from '../screens/MainScreen';
import RewardPoints from '../components/RewardPoints';
import PayScreen from '../screens/PayScreen';

const Stack = createStackNavigator();

const homeScreenOptions = {
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
  headerTitle: <RewardPoints isPayScreen={true} />,
  headerRightContainerStyle: { marginRight: 10 },
  headerRight: () => (
    <Ionicons
      onPress={() => infoSheetRef.current.snapTo(0)}
      name="ios-information-circle-outline"
      size={24}
      color={colors.white}
    />
  ),
};

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={homeScreenOptions}
      name="Main"
      component={MainScreen}
    />
    <Stack.Screen
      options={payScreenOptions}
      name="ApplyOffer"
      component={PayScreen}
    />
  </Stack.Navigator>
);

export default AppNavigator;
