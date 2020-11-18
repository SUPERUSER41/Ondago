import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import AppText from '../components/AppText';
import { Foundation } from '@expo/vector-icons';
import colors from '../config/colors';
import Screen from '../components/Screen';

const PinScreen = () => {
  const [pin, setPin] = useState('');
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.shield}>
          <Foundation name="shield" size={28} color={colors.white} />
        </View>
        <AppText style={styles.text}>PIN Required</AppText>
        <AppText style={styles.description}>
          Account secured, please enter your PIN below to proceed with this
          action.
        </AppText>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPin(text)}
            value={pin}
            maxLength={4}
            keyboardType={'number-pad'}
          />
          <AppText style={styles.forgetPassword}>Forgot your PIN?</AppText>
        </View>
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  shield: {
    backgroundColor: colors.primary,
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: 'bold',
  },
  description: {
    color: colors.black,
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: colors.black,
    borderWidth: 1,
    width: '100%',
    height: 60,
    paddingRight: 20,
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 15,
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: 25,
    width: '100%',
  },
  forgetPassword: {
    alignSelf: 'flex-end',
  },
});

export default PinScreen;
