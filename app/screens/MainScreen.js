import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppHeader from '../components/AppHeader';
import AppTabNavigator from '../navigation/AppTabNavigator';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader />
      <AppTabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;
