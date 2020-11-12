import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import AppText from '../components/AppText';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import colors from '../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const OfferInfoScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.backgroundImage}
          source={require('../assets/amc_theatre.jpeg')}
        />
        <AntDesign
          name="closecircle"
          size={24}
          color="white"
          style={styles.closeIcon}
        />
        <View style={styles.brandImageContainer}>
          <Image
            style={styles.brandImage}
            source={require('../assets/company.png')}
          />
        </View>
      </View>

      <View style={styles.inner}>
        <View style={styles.brandInfo}>
          <AppText style={styles.brandName}>AMC</AppText>
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
              <Text>Open Hours</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button}>
              <Feather
                name="clock"
                size={24}
                color="black"
                style={{ marginRight: 4 }}
              />
              <Text>Open Hours</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button}>
              <Feather
                name="clock"
                size={24}
                color="black"
                style={{ marginRight: 4 }}
              />
              <Text>Open Hours</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button}>
              <Feather
                name="clock"
                size={24}
                color="black"
                style={{ marginRight: 4 }}
              />
              <Text>Open Hours</Text>
            </View>
          </TouchableOpacity>
        </View>
        <AppText style={styles.terms}>eGift Card Terms and Conditions</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
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
