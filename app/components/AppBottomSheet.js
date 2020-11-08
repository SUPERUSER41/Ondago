import React from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import colors from '../config/colors';
import AppText from './AppText';

const AppBottomSheet = ({ sheetRef, Content }) => {
  const fallback = new Animated.Value(1);
  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[330, 0, 0]}
      initialSnap={1}
      borderRadius={10}
      callbackNode={fallback}
      enabledGestureInteraction={true}
      renderContent={Content}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brand: {
    color: colors.primary,
    fontWeight: 'bold',
    lineHeight: 20,
    flexShrink: 1,
  },
});

export default AppBottomSheet;
