import React from 'react';
import {
	View,
	Image,
	StyleSheet,
	TouchableHighlight,
	Dimensions,
} from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

const DEVICE_WIDTH = Dimensions.get('window').width;

const OfferItem = ({
	brand,
	image,
	giftCardNumber = '6000-1484-0000-8651-902',
	date = '01 September, 2020 @ 10:11 AM',
	giftCardValue = '5.00',
	onPress,
}) => {
	return (
		<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
			<View style={styles.container}>
				<View style={styles.row}>
					<Image style={styles.image} source={image} />
					<View>
						<AppText style={styles.brand}>{brand}</AppText>

						<AppText style={styles.text}>{giftCardNumber}</AppText>
						<AppText style={styles.text}>{date}</AppText>
					</View>
				</View>
				<View>
					<AppText style={styles.boldText}>${giftCardValue}</AppText>
					<AppText style={styles.grayText}>$25.00</AppText>
				</View>
			</View>
		</TouchableHighlight>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		width: DEVICE_WIDTH,
		padding: 10,
	},
	image: {
		width: 62,
		height: 62,
		marginRight: 15,
	},

	brand: {
		color: colors.primary,
		fontWeight: 'bold',
		lineHeight: 20,
		flexShrink: 1,
	},
	text: {
		color: colors.black,
		fontSize: 14,
	},
	boldText: { fontWeight: 'bold', fontSize: 16 },
	grayText: {
		color: colors.secondary,
		fontSize: 10,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});

export default OfferItem;
