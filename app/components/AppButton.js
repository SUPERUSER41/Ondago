import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Market from '../icons/Market';

const AppButton = ({ title, icon }) => {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <View style={styles.buttonIcon}>
          <Market />
          <MaterialCommunityIcons
            name="wallet-giftcard"
            size={24}
            color="black"
          />
        </View>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00168D',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 9,
    paddingRight: 20,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  buttonIcon: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 9,
    marginRight: 9,
    borderRadius: 100,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default AppButton;
