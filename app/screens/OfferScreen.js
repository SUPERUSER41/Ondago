import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import OfferItem from '../components/OfferItem';
import Screen from '../components/Screen';
import OfferItemSeparator from '../components/OfferItemSeparator';

const initialOffers = [
  {
    id: 1,
    name: 'AMC',
    image: require('../assets/company.png'),
    address: '1000 Piedmont Avenue',
    distance: '0.5 mi',
    discount: '2',
    type: 'online',
  },
  {
    id: 2,
    name: 'AMC',
    image: require('../assets/company.png'),
    address: '1000 Piedmont Avenue',
    distance: '0.5 mi',
    discount: '2',
    type: 'online',
  },
  {
    id: 3,
    name: 'AMC',
    image: require('../assets/company.png'),
    address: '1000 Piedmont Avenue',
    distance: '0.5 mi',
    discount: '2',
    type: 'online',
  },
  {
    id: 4,
    name: 'AMC',
    image: require('../assets/company.png'),
    address: '1000 Piedmont Avenue',
    distance: '0.5 mi',
    discount: '2',
    type: 'online',
  },
];

const OfferScreen = () => {
  const [offers, setOffers] = useState(initialOffers);
  const [isRefreshing, setIsRefreshing] = useState(false);

  return (
    <Screen>
      <FlatList
        data={offers}
        keyExtractor={(offer) => offer.id.toString()}
        renderItem={({ item }) => (
          <OfferItem onPress={() => console.log('Pressed', item)} {...item} />
        )}
        ItemSeparatorComponent={OfferItemSeparator}
        refreshing={isRefreshing}
        onRefresh={() => {
          setOffers([
            {
              id: 4,
              name: 'AMC',
              image: require('../assets/company.png'),
              address: '1000 Piedmont Avenue',
              distance: '0.5 mi',
              discount: '2',
              type: 'online',
            },
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default OfferScreen;
