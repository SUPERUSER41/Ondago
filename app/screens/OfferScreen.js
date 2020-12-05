import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import OfferItem from '../components/OfferItem';
import Screen from '../components/Screen';
import OfferItemSeparator from '../components/OfferItemSeparator';
import { useStoreState, useStoreActions } from 'easy-peasy';

const OfferScreen = ({ navigation }) => {
  const offers = useStoreState((state) => state.giftCards);
  const fetchGiftCards = useStoreActions((actions) => actions.fetchGiftCards);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const setGiftCard = useStoreActions((actions) => actions.setGiftCard);

  useEffect(() => {
    fetchGiftCards();
  }, []);

  const navigateToPayScreen = (item) => {
    setGiftCard(item);
    navigation.navigate('Pay');
  };

  return (
    <Screen>
      <FlatList
        data={offers}
        keyExtractor={(offer) => offer.id.toString()}
        renderItem={({ item }) => (
          <OfferItem
            onPress={() => navigateToPayScreen(item)}
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
