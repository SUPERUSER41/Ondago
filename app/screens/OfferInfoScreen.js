import React from 'react';
import {
	Image,
	View,
	StyleSheet,
	Text,
	Platform,
	Linking,
	Alert,
} from 'react-native';
import { useStoreState } from 'easy-peasy';
import AppText from '../components/AppText';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import colors from '../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Pressable } from 'react-native';

const BUTTONTEXTS = {
	website: 'Website  ',
	hours: 'Open Hours  ',
	directions: 'Get Directions  ',
	call: 'Call Location  ',
};

const callNumber = (phone) => {
	let phoneNumber = phone;
	if (Platform.OS !== 'android') {
		phoneNumber = `telprompt:${phone}`;
	} else {
		phoneNumber = `tel:${phone}`;
	}
	Linking.canOpenURL(phoneNumber)
		.then((supported) => {
			if (!supported) {
				Alert.alert('Phone number is not available');
			} else {
				return Linking.openURL(phoneNumber);
			}
		})
		.catch((err) => console.log(err));
};

const openWebsite = (websiteURL) => {
	Linking.canOpenURL(websiteURL)
		.then((supported) => {
			if (!supported) {
				Alert.alert('Unable to open website.');
			} else {
				return Linking.openURL(websiteURL);
			}
		})
		.catch((err) => console.log(err));
};

const OfferInfoScreen = ({ navigation }) => {
	const giftCard = useStoreState((state) => state.giftCard);

	return (
		<View style={styles.container}>
			<View>
				<Image
					style={styles.backgroundImage}
					source={require('../assets/amc_theatre.jpeg')}
				/>
				<AntDesign
					name="closecircle"
					onPress={() => navigation.goBack()}
					size={24}
					color="white"
					style={styles.closeIcon}
				/>
				<View style={styles.brandImageContainer}>
					<Image style={styles.brandImage} source={{ uri: giftCard.image }} />
				</View>
			</View>

			<View style={styles.inner}>
				<View style={styles.brandInfo}>
					<AppText style={styles.brandName}>{giftCard.brand}</AppText>
					<AppText style={styles.address}>1000 Piedmont Avenue</AppText>
					<View style={styles.distanceOnlineContainer}>
						<Feather name="navigation" size={12} color={colors.secondary} />
						<AppText style={styles.distance}>0.5 mi</AppText>
						<View style={styles.onlineContainer}>
							<AppText style={styles.online}>online</AppText>
						</View>
					</View>
				</View>

				<AppText style={styles.description}>
					AMC Entertainment Holdings, Inc. is an American movie theater chain
					headquartered in Leawood, Kansas, and the largest movie theater chain
					in the world. Founded in 1920, AMC has the largest share of the U.S.
					theater market ahead of Regal and Cinemark Theatres.
				</AppText>
				<View style={styles.buttonContainer}>
					<TouchableOpacity>
						<View style={styles.button}>
							<Feather
								name="clock"
								size={24}
								color="black"
								style={{ marginRight: 4 }}
							/>
							<Text style={styles.buttonText}>{BUTTONTEXTS.hours}</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => callNumber('8764557559')}>
						<View style={styles.button}>
							<Feather
								name="phone"
								size={24}
								color="black"
								style={{ marginRight: 4 }}
							/>
							<Text style={styles.buttonText}>{BUTTONTEXTS.call}</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity>
						<View style={styles.button}>
							<Feather
								name="compass"
								size={24}
								color="black"
								style={{ marginRight: 4 }}
							/>
							<Text style={styles.buttonText}>{BUTTONTEXTS.directions}</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => openWebsite('https://google.com')}>
						<View style={styles.button}>
							<Feather
								name="globe"
								size={24}
								color="black"
								style={{ marginRight: 4 }}
							/>
							<Text style={styles.buttonText}>{BUTTONTEXTS.website}</Text>
						</View>
					</TouchableOpacity>
				</View>
				<Pressable onPress={() => navigation.navigate('GiftCardTerms')}>
					<AppText style={styles.terms}>
						eGift Card Terms and Conditions
					</AppText>
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		flex: 1,
	},
	closeIcon: { position: 'absolute', top: 12, left: 20 },
	button: {
		width: 180,
		borderRadius: 90,
		borderColor: colors.black,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		borderWidth: 2,
		marginBottom: 15,
	},
	buttonText: { fontWeight: 'bold' },
	buttonContainer: {
		flexDirection: 'row',
		marginTop: 30,
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	inner: {
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
	brandInfo: {
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 20,
	},
	description: {
		textAlign: 'center',
	},
	backgroundImage: {
		width: '100%',
		height: 300,
		resizeMode: 'cover',
	},
	brandImageContainer: {
		backgroundColor: 'white',
		position: 'absolute',
		bottom: -50,
		alignSelf: 'center',
		borderRadius: 120 / 2,
	},
	brandImage: {
		height: 120,
		width: 120,
		resizeMode: 'cover',
		borderRadius: 129 / 2,
	},
	brandName: {
		color: colors.primary,
		fontWeight: 'bold',
		fontSize: 20,
		marginVertical: 14,
	},
	address: {
		color: colors.secondary,
		fontSize: 14,
	},
	distance: {
		fontSize: 14,
		marginLeft: 5,
		color: colors.secondary,
	},
	distanceOnlineContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	onlineContainer: {
		backgroundColor: colors.lightBlue,
		alignItems: 'center',
		justifyContent: 'center',
		width: 47,
		height: 17,
		marginLeft: 5,
		borderRadius: 9,
	},
	terms: {
		color: colors.secondary,

		textAlign: 'center',
	},
	online: { color: colors.white, fontSize: 12, textAlign: 'center' },
});

export default OfferInfoScreen;
