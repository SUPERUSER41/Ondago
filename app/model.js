import { action, thunk } from 'easy-peasy';
import giftCardsApi from './api/giftcards';

export default {
	//States
	giftCards: [],
	giftCard: {},

	//Thunks
	fetchGiftCards: thunk(async (actions, payload) => {
		const response = await giftCardsApi.getGiftCards();
		const locations = await giftCardsApi.getLocationsWithGiftCards();
		console.log(locations);
		actions.setGiftCards(response);
	}),

	//Actions
	setGiftCards: action((state, giftCards) => {
		state.giftCards = giftCards;
	}),

	setGiftCard: action((state, giftCard) => {
		console.log('id in state', giftCard);
		state.giftCard = giftCard;
	}),
};
