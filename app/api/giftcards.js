import client from './client';

const endpoint = '/gift-cards';

const getGiftCards = () => client.get(endpoint);

export default {
  getGiftCards,
};
