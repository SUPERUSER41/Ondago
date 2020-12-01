import { combineReducers } from 'redux';
import giftCardReducer from './giftCardReducer';

export default combineReducers({
  giftCards: giftCardReducer,
});
