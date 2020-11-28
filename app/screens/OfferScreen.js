import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import giftCardsApi from '../api/giftcards';
import OfferItem from '../components/OfferItem';
import Screen from '../components/Screen';
import OfferItemSeparator from '../components/OfferItemSeparator';

const initialOffers = [
  {
    id: 1,
    brand: 'AMC',
    image: require('../assets/company.png'),
    address: '1000 Piedmont Avenue',
    distance: '0.5 mi',
    discount: '2',
    type: 'online',
  },
  {
    id: 2,
    brand: 'AMC',
    image: require('../assets/company.png'),
    address: '1000 Piedmont Avenue',
    distance: '0.5 mi',
    discount: '2',
    type: 'online',
  },
  {
    id: 3,
    brand: 'AMC',
    image: require('../assets/company.png'),
    address: '1000 Piedmont Avenue',
    distance: '0.5 mi',
    discount: '2',
    type: 'online',
  },
  {
    id: 4,
    brand: 'AMC',
    image: require('../assets/company.png'),
    address: '1000 Piedmont Avenue',
    distance: '0.5 mi',
    discount: '2',
    type: 'online',
  },
];

const OfferScreen = ({ navigation }) => {
  const [offers, setOffers] = useState(initialOffers);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    // fetchGiftCards();
    //TODO: add cleanup function
  }, []);

  const fetchGiftCards = async () => {
    try {
      const response = await giftCardsApi.getGiftCards();
      setOffers(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen>
      <FlatList
        data={offers}
        keyExtractor={(offer) => offer.id.toString()}
        renderItem={({ item }) => (
          <OfferItem
            onPress={() => navigation.navigate('Pay')}
            onPressOfferInfo={() => navigation.navigate('OfferInfo')}
            {...item}
          />
        )}
        ItemSeparatorComponent={OfferItemSeparator}
        refreshing={isRefreshing}
        onRefresh={() => {
          setOffers([
            {
              id: 4,
              brand: 'AMC',
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

export default OfferScreen;
