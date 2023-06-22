import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SignUpComponent} from '../components';
import {SignUpScreenNavigationProp} from '../types';

type Props = {
  navigation: SignUpScreenNavigationProp;
  route: any;
};
export const SignUpScreen: React.FC<Props> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 10}}>
        <Text style={styles.headingText}>Create Your Account</Text>
      </View>
      <Text style={[styles.paraText, {marginBottom: 40}]}>
        Hey, Enter your account information to create your account
      </Text>
      <View>
        <SignUpComponent navigation={navigation} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headingText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  paraText: {
    color: 'black',
    fontWeight: 'normal',
  },
});
