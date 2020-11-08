import React, { useState } from 'react';
import {
  Button,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';
import { TextInputMask } from 'react-native-masked-text';

const ApplyOffer = ({ onPress, image }) => {
  const [amount, setAmount] = useState();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <AppText style={styles.name}>AMC</AppText>

      <TextInputMask
        style={styles.input}
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
          <AppText style={styles.pay}>You pay USD $00.00</AppText> from your
        </AppText>
        <AppText>available balance USD $576.02</AppText>
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Button color={colors.white} onPress={onPress} title="Pay now" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 129,
    width: 129,
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
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 150,
    borderRadius: 50,
  },
});

export default ApplyOffer;
