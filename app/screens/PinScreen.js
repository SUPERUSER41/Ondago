import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import AppText from '../components/AppText';
import { Foundation } from '@expo/vector-icons';
import colors from '../config/colors';
import { Ionicons } from '@expo/vector-icons';

const PinScreen = ({ navigation }) => {
  const [pin, setPin] = useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Ionicons
            onPress={() => navigation.goBack()}
            name="ios-close"
            size={36}
            color={colors.black}
            style={styles.closeIcon}
          />
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    marginTop: 50,
    marginVertical: 20,
  },
  closeIcon: { position: 'absolute', top: 12, left: 20 },
  container: {
    alignItems: 'center',
    height: '100%',
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
