import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import OfferItem from '../components/OfferItem';
import Screen from '../components/Screen';
import OfferItemSeparator from '../components/OfferItemSeparator';
import { useStoreState, useStoreActions } from 'easy-peasy';

import AppActivityIndicator from '../components/AppActivityIndicator';

const OfferScreen = ({ navigation }) => {
	const offers = useStoreState((state) => state.giftCards);
	const fetchGiftCards = useStoreActions((actions) => actions.fetchGiftCards);

	const [isLoading, setIsLoading] = useState(false);
	const setGiftCard = useStoreActions((actions) => actions.setGiftCard);

	const loadGiftCards = async () => {
		setIsLoading(true);
		await fetchGiftCards();
		setIsLoading(false);
	};

	useEffect(() => {
		loadGiftCards();
	}, []);

	const navigateToPayScreen = (item) => {
		setGiftCard(item);
		navigation.navigate('Pay');
	};

	return (
		<Screen>
			<AppActivityIndicator visible={isLoading} />
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
			/>
		</Screen>
	);
};

export default OfferScreen;
