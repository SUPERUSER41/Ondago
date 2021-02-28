import React from 'react';
import { FlatList } from 'react-native';
import Screen from '../components/Screen';
import GiftCardItem from '../components/GiftCardItem';
import OfferItemSeparator from '../components/OfferItemSeparator';
import { availableGiftCards } from '../mocks';

const MyGiftCardsScreen = ({ navigation }) => {
	return (
		<Screen>
			<FlatList
				data={availableGiftCards}
				keyExtractor={(giftCard) => giftCard.id.toString()}
				renderItem={({ item }) => (
					<GiftCardItem brand={item.brand} image={item.image} {...item} />
				)}
				ItemSeparatorComponent={OfferItemSeparator}
			/>
		</Screen>
	);
};

export default MyGiftCardsScreen;
