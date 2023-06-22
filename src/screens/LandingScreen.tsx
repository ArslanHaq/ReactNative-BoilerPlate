import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LandingScreenNavigationProp} from '../types';

type Props = {
  navigation: LandingScreenNavigationProp;
  route: any;
};

const imageSrc = require('../../assets/background2.jpg');
const LandingScreen: React.FC<Props> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Image source={imageSrc} />
      <View
        style={[
          StyleSheet.absoluteFill,
          {alignItems: 'center'},
          {justifyContent: 'center'},
        ]}>
        <Text style={styles.landingText}>WELCOME</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}>
          <Text style={styles.buttonText}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  landingText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  buttonStyle: {
    backgroundColor: 'blue',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 10,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
