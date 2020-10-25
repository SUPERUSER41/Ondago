import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

const AppLogo = () => {
  return <Text style={styles.logo}>Ondago</Text>;
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default AppLogo;
