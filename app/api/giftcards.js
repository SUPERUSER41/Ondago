import client from './client';
import * as Crypto from 'expo-crypto';
import helpers from '../config/helpers';

const endpoint = '/gift-cards';

const secret = '744f118f4251483a9da353145b348618';
const deviceId = '65a248ca-34f0-4665-a72c-de0a88493ef2';
const installId = '65a248ca-34f0-4665-a72c-de0a88493ef2';
const accessToken = 'a3b9c80aa5ae485c9b7ed100e5ecd6a9';
const clientPlatform = 'IPhone';
const applicationId = '7b2a6cd6-a2d3-491a-ade1-bb45e40c4ed8';

let date = new Date();
let timestamp = date.getTime();

// Register hash: SHA256 hash of a string of (secret + time + url + requestString)
// Post-Register hashing: SHA256 hash of a string of (secret + deviceId + installId + time + url + requestString);

const postRegisterHash = secret + deviceId + installId + timestamp + endpoint;

const createHash = async (digestString) => {
	const digestAlgorithm = Crypto.CryptoDigestAlgorithm.SHA256;
	let digest;
	try {
		digest = await Crypto.digestStringAsync(digestAlgorithm, digestString);
	} catch (error) {
		console.log(error);
	}

	return digest;
};

const getGiftCards = async () => {
	const hash = await createHash(postRegisterHash);

	try {
		const sionicHeaders = {
			'application-identifier': applicationId,
			'client-version': '5.3.01',
			'client-platform': clientPlatform,
			latitude: '33.640837',
			longitude: '-84.445668',
			timestamp,
			'access-token': accessToken,
			hash,
			timezone: 'America/New_York',
		};
		const { data: fetchedData } = await client.get(endpoint, null, {
			headers: sionicHeaders,
		});
		const giftCardList = fetchedData['gift-card-list'].map((item) => {
			return {
				id: item['giftcard-id'],
				brand: item.brand,
				image: item['image-url'],
				discount: Math.round(item['rewards-base-rate'] * 100),
				...item,
			};
		});

		//TODO: handle return status
		return giftCardList;
	} catch (error) {
		console.log(error);
	}
};

export default {
	getGiftCards,
};
