import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import colors from '../config/colors';

const OfferInfo = ({ onPress }) => {
  return (
    <Ionicons
      onPress={onPress}
      name="ios-information-circle-outline"
      size={24}
      color={colors.white}
    />
  );
};

export default OfferInfo;
