import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import AppNavigator from './AppNavigator';
import OfferInfoScreen from '../screens/OfferInfoScreen';
import PinScreen from '../screens/PinScreen';

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
      <Stack.Screen name="Pin" component={PinScreen} />
    </Stack.Navigator>
  );
};

export default RootAppNavigator;
