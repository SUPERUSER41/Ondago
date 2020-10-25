import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppHeader from '../components/AppHeader';
import OfferScreen from './OfferScreen';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader />
      <OfferScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;
