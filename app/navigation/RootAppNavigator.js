import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import AppNavigator from './AppNavigator';
import OfferInfoScreen from '../screens/OfferInfoScreen';

const Stack = createStackNavigator();

const RootAppNavigator = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <Stack.Screen name="App" component={AppNavigator} />
      <Stack.Screen name="OfferInfo" component={OfferInfoScreen} />
    </Stack.Navigator>
  );
};

export default RootAppNavigator;
