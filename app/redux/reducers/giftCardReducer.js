import { FETCH_GIFT_CARDS } from '../actions/types';

const initialState = {
  giftCards: [],
  giftCard: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
