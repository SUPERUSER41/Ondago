import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import colors from '../config/colors';

import RewardPoints from './RewardPoints';
import AppLogo from './AppLogo';
import AppSearch from './AppSearch';

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.header}
        leftComponent={{ icon: 'close', color: colors.white }}
        centerComponent={<AppLogo />}
        rightComponent={<RewardPoints />}
      />
      <AppSearch />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 15,
    backgroundColor: colors.primary,
  },
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: 0,
    borderBottomColor: colors.primary,
  },
  content: {
    justifyContent: 'space-around',

    height: 200,
  },
  innerContent: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  searchContainer: {
    paddingHorizontal: 20,
  },
});

export default AppHeader;
