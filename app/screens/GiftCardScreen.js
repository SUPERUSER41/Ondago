import React, { useLayoutEffect, useState } from 'react';

import { View, StyleSheet, Text } from 'react-native';
import Clipboard from '@react-native-community/clipboard';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import AppText from '../components/AppText';
import Screen from '../components/Screen';
import colors from '../config/colors';
import GiftCardBrandLogo from '../components/GiftCardBrandLogo';
import { TouchableOpacity } from 'react-native-gesture-handler';

const GiftCardScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Ionicons
          onPress={() => navigation.goBack()}
          name="ios-close"
          size={36}
          color={colors.black}
        />
      ),
      headerTitle: () => (
        <GiftCardBrandLogo image={require('../assets/company.png')} />
      ),
      headerRight: () => (
        <Ionicons
          onPress={() => navigation.navigate('OfferInfo')}
          name="ios-information-circle-outline"
          size={24}
          color={colors.black}
        />
      ),
    });
  }, [navigation]);

  const copyToClipboard = () => {
    console.log('hello');
    //TODO: implement copy function
    alert('Copied to clipboard');
  };

  return (
    <Screen>
      <View style={styles.container}>
        <AppText style={styles.description}>
          Your eGift Card is ready! Show the code below to the merchant or enter
          the card number and/or PIN online to checkout.
        </AppText>
        <AppText style={styles.giftCardValue}>$25.00</AppText>
        <View style={styles.collapsable}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Ready for scan/use</Text>
          </View>
          <FontAwesome5 name="barcode" size={100} color="black" />
          <View style={styles.row}>
            <AppText style={styles.giftCardCode}>
              6000-1484-0000-8651-902
            </AppText>
            <TouchableOpacity onPress={copyToClipboard}>
              <MaterialIcons name="content-copy" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <AppText>PIN</AppText>
            <AppText style={styles.semiBold}>Not Available</AppText>
          </View>
          <View style={styles.row}>
            <AppText>Wallet charged</AppText>
            <AppText style={styles.semiBold}>USD $21.76</AppText>
          </View>
          <View style={styles.row}>
            <AppText>eGift Card value</AppText>
            <AppText style={styles.semiBold}>USD $25</AppText>
          </View>
          <View style={styles.row}>
            <AppText>Ondago Rewards used</AppText>
            <AppText style={styles.semiBold}>1,276</AppText>
          </View>
          <View style={styles.row}>
            <AppText>Identifier #</AppText>
            <View style={styles.indentifierNumContainer}>
              <AppText style={styles.indentifierNum}>72JS2U8</AppText>
              <TouchableOpacity onPress={copyToClipboard}>
                <MaterialIcons name="content-copy" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <AppText style={styles.rewardsEarned}>Rewards earned</AppText>
            <AppText style={styles.rewardsEarned}>383</AppText>
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 80,
  },
  description: {
    color: colors.white,
    textAlign: 'center',
  },
  badge: {
    backgroundColor: colors.accent1,
    borderRadius: 14,
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingVertical: 7,
    width: 160,
  },
  badgeText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },

  collapsable: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 36,
    paddingVertical: 20,
  },
  giftCardCode: {
    fontSize: 20,
    fontWeight: '600',
  },
  giftCardValue: {
    color: colors.white,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  indentifierNum: {
    fontWeight: '600',
    marginRight: 5,
  },
  indentifierNumContainer: { alignItems: 'center', flexDirection: 'row' },
  rewardsEarned: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  semiBold: {
    fontWeight: '600',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
});

export default GiftCardScreen;
