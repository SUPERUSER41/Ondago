import React, { useState } from 'react';
import {
  Button,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import colors from '../config/colors';
import AppText from '../components/AppText';
import { TextInputMask } from 'react-native-masked-text';

const PayScreen = () => {
  const [amount, setAmount] = useState();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/company.png')} />
      <AppText style={styles.name}>AMC</AppText>
      <TextInputMask
        style={styles.input}
        placeholder="$5.00+"
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
          <Button
            color={colors.white}
            onPress={() => console.log('paynow')}
            title="Pay now"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
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

export default PayScreen;
