import React, { useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import AppLogo from '../components/AppLogo';
import MainScreen from '../screens/MainScreen';
import OfferInfo from '../components/OfferInfo';
import PayScreen from '../screens/PayScreen';
import RewardPoints from '../components/RewardPoints';

import colors from '../config/colors';
import PinScreen from '../screens/PinScreen';

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
};

//TODO: Write a function to handle on press for info

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={homeScreenOptions}
        name="Main"
        component={PinScreen}
      />
      <Stack.Screen
        options={payScreenOptions}
        name="Pay"
        component={PayScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
