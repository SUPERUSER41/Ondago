import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import colors from '../config/colors';

const initialLayout = { width: Dimensions.get('window').width };

const AppTabBar = ({ Screen1 }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Nearby' },
    { key: 'second', title: 'Online' },
  ]);
  const renderScene = SceneMap({
    first: Screen1,
    second: Screen1,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      activeColor={colors.primary}
      labelStyle={styles.label}
      inactiveColor={colors.secondary}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'transparent',
  },
  indicator: {
    backgroundColor: colors.primary,
    height: 3,
  },
  label: {
    fontWeight: '500',
    textTransform: 'capitalize',
    fontSize: 16,
  },
});

export default AppTabBar;
