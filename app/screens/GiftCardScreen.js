import React from 'react';

import { View, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import AppText from '../components/AppText';
import Screen from '../components/Screen';
import colors from '../config/colors';

const GiftCardScreen = ({ navigation }) => {
  return (
    <Screen>
      <View style={styles.container}>
        <Image source={require('../assets/company.png')} />
        <AppText>
          Your eGift Card is ready! Show the code below to the merchant or enter
          the card number and/or PIN online to checkout.
        </AppText>
        <AppText>$25.00</AppText>
        <AppText>6000-1484-0000-8651-902</AppText>
        <MaterialIcons name="content-copy" size={24} color="black" />
        <AppText>PIN</AppText>
        <AppText>Not Available</AppText>
        <AppText>Wallet charged</AppText>
        <AppText>USD $21.76</AppText>
        <AppText>eGift Card value</AppText>
        <AppText>USD $25</AppText>
        <AppText>Ondago Rewards used</AppText>
        <AppText>1,276</AppText>
        <AppText>Identifier #</AppText>
        <MaterialIcons name="content-copy" size={24} color="black" />
        <AppText>72JS2U8</AppText>
        <AppText>Rewards earned</AppText>
        <AppText>383</AppText>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  mainText: {
    color: colors.white,
  },
});

export default GiftCardScreen;
