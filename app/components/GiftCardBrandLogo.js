import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const GiftCardBrandLogo = ({ image }) => {
  return (
    <View style={styles.brandImageContainer}>
      <Image style={styles.brandImage} source={image} />
    </View>
  );
};

const styles = StyleSheet.create({
  brandImageContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    top: -30,
    alignSelf: 'center',
    borderRadius: 120 / 2,
  },
  brandImage: {
    height: 120,
    width: 120,
    resizeMode: 'cover',
  },
});

export default GiftCardBrandLogo;
