import { create } from 'apisauce';

const baseURL = 'https://api4qa.ionloyalty.com/API';

const apiClient = create({
  baseURL,
});

export default apiClient;
