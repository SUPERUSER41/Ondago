/**Docs for api: https://documenter.getpostman.com/view/7369576/S1a1Z7w5?version=latest#ea61c8f5-2f90-4eee-9237-8b68064d4543 */
import { create } from 'apisauce';

const baseURL = 'https://api4qa.ionloyalty.com/API';

const accessToken = '744f118f4251483a9da353145b348618';
const deviceId = 'IPhone11';

let date = new Date();
let timestamp = date.getTime();

// Register hash: SHA256 hash of a string of (secret + time + url + requestString)
// Post-Register hashing: SHA256 hash of a string of (secret + deviceId + installId + time + url + requestString);

const registerHash = accessToken + timestamp + baseURL;
// const hash = crypto.createHash('sha256').update(registerHash).digest();
console.log(hash);

const apiClient = create({
  baseURL,
  headers: {
    'client-version': '5.3.01',
    'client-platform': deviceId,
    latitude: '33.640837',
    longitude: '-84.445668',
    timestamp: timestamp,
    'access-token': accessToken,
    hash: hash,
    timezone: 'America/New_York',
  },
});

export default apiClient;
