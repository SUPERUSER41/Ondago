import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OfferScreen from '../screens/OfferScreen';
import ApplyOfferScreen from '../screens/ApplyOfferScreen';

const Stack = createStackNavigator();

const OfferNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Offer" component={OfferScreen} />
    <Stack.Screen name="ApplyOffer" component={ApplyOfferScreen} />
  </Stack.Navigator>
);
export default OfferNavigator;
