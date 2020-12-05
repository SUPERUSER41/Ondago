import React, { useState, useLayoutEffect } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { TextInputMask } from 'react-native-masked-text';

import AppText from '../components/AppText';
import { Ionicons } from '@expo/vector-icons';

import colors from '../config/colors';

const PayScreen = ({ navigation }) => {
  const [amount, setAmount] = useState();
  const giftCard = useStoreState((state) => state.giftCard);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          onPress={() => navigation.navigate('OfferInfo')}
          name="ios-information-circle-outline"
          size={24}
          color={colors.white}
        />
      ),
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: giftCard.image }} />
          <AppText style={styles.name}>{giftCard.brand}</AppText>
          <TextInputMask
            style={styles.input}
            placeholder="$5.00+"
            maxLength={10}
            options={{
              precision: 2,
              separator: '.',
              delimiter: ',',
              unit: '$',
              suffixUnit: '',
            }}
            type="money"
            value={amount}
            onChangeText={(text) => setAmount(text)}
          />
          <View style={styles.details}>
            <AppText>
              <AppText style={styles.pay}>
                You pay USD {!amount ? '$0.00' : amount}
              </AppText>{' '}
              from your
            </AppText>
            <AppText>available balance USD $576.02</AppText>
          </View>
          <TouchableOpacity
            disabled={!amount || amount === '$0.00'}
            onPress={() => navigation.navigate('Pin')}
          >
            <View
              style={
                !amount || amount === '$0.00'
                  ? styles.disabledButton
                  : styles.activeButton
              }
            >
              <Text
                style={
                  !amount || amount === '$0.00'
                    ? styles.disabledButtonText
                    : styles.activeButtonText
                }
              >
                Pay Now
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 129,
    width: 129,
    borderRadius: 129 / 2,
    resizeMode: 'cover',

    backgroundColor: colors.primary,
  },
  name: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 14,
  },
  input: {
    fontSize: 60,
    color: colors.primary,
    fontWeight: 'bold',
  },
  pay: {
    fontWeight: 'bold',
  },
  details: {
    marginVertical: 30,
  },
  activeButton: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 150,
    borderRadius: 50,
  },
  disabledButton: {
    backgroundColor: colors.disabled,
    paddingVertical: 20,
    paddingHorizontal: 150,
    borderRadius: 50,
  },
  activeButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  disabledButtonText: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  shadowContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },
});

export default PayScreen;
