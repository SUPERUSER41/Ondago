import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

const RewardPoints = ({ points = '1,379' }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle} />
        </View>
        <Text style={styles.text}>{points}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 36,

    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.accent2,
    borderRadius: 15,
    flexDirection: 'row',
    paddingHorizontal: 9,
    paddingVertical: 5,
  },
  text: {
    color: colors.white,
    fontWeight: '500',
  },
  outerCircle: {
    width: 16,
    height: 16,
    borderColor: colors.accent1,
    borderWidth: 3,
    borderRadius: 50,
    alignItems: 'center',
    marginRight: 5,
    justifyContent: 'center',
  },
  innerCircle: {
    width: '50%',
    height: '50%',
    borderColor: colors.accent1,
    borderWidth: 3,
    borderRadius: 50,
  },
});

export default RewardPoints;
