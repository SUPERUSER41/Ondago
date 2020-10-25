import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppHeader from '../components/AppHeader';
import AppTabBar from '../components/AppTabBar';
import OfferScreen from './OfferScreen';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader />
      <AppTabBar Screen1={OfferScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;
