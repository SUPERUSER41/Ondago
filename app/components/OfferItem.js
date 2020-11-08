import React, { useState, useRef } from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';

import AppBottomSheet from './AppBottomSheet';

const OfferItem = ({
  brand,
  image,
  address = '1000 Piedmont Avenue',
  distance = '0.5 mi',
  discount = 2,
  type = 'online',
  onPress,
}) => {
  const SheetContent = () => (
    <View
      style={{
        backgroundColor: 'red',
        padding: 16,
        height: 450,
      }}
    >
      <AppText>Swipe down to close</AppText>
    </View>
  );
  const infoSheetRef = useRef(null);
  return (
    <>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.row}>
            <Image style={styles.image} source={image} />
            <View>
              <View style={{ flexDirection: 'row', width: 200 }}>
                <AppText style={styles.brand}>{brand}</AppText>
              </View>
              <AppText style={styles.address}>{address}</AppText>
              <View style={styles.distanceOnlineContainer}>
                <Feather name="navigation" size={12} color={colors.secondary} />
                <AppText style={styles.distance}>{distance}</AppText>
                <View style={styles.onlineContainer}>
                  <AppText style={styles.online}>{type}</AppText>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.discountContainer}>
              <AppText style={styles.discount}>{discount}%</AppText>
              <AppText style={styles.rewards}>Rewards</AppText>
            </View>
            <Ionicons
              onPress={() => infoSheetRef.current.snapTo(0)}
              style={styles.info}
              name="ios-information-circle-outline"
              size={24}
              color={colors.secondary}
            />
          </View>
        </View>
      </TouchableHighlight>
      {/* <AppBottomSheet sheetRef={infoSheetRef} Content={SheetContent} /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 62,
    height: 62,
    marginRight: 15,
  },

  brand: {
    color: colors.primary,
    fontWeight: 'bold',
    lineHeight: 20,
    flexShrink: 1,
  },
  address: {
    color: colors.secondary,
    fontSize: 14,
  },
  distance: {
    fontSize: 14,
    marginLeft: 5,
    color: colors.secondary,
  },
  distanceOnlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  onlineContainer: {
    backgroundColor: colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
    width: 47,
    height: 17,
    marginLeft: 5,
    borderRadius: 9,
  },
  online: { color: colors.white, fontSize: 12, textAlign: 'center' },
  discountContainer: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 11,
    marginLeft: 20,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discount: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 26,
  },
  rewards: {
    color: colors.white,
    fontSize: 10,
  },
  info: {
    marginLeft: 9,
  },
});

export default OfferItem;
