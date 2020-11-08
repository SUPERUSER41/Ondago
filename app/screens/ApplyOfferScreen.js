import React from 'react';
import { Image, Text, View } from 'react-native';
import ApplyOffer from '../components/ApplyOffer';

const ApplyOfferScreen = () => {
  return (
    <View>
      <ApplyOffer image={require('../assets/company.png')} />
    </View>
  );
};

export default ApplyOfferScreen;
