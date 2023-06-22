import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LoginComponent, SignUpComponent} from '../components';
import {LoginScreenNavigationProp} from '../types';

type Props = {
  navigation: LoginScreenNavigationProp;
  route: any;
};
export const LoginScreen: React.FC<Props> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 10}}>
        <Text style={styles.headingText}>Login</Text>
      </View>
      <Text
        style={[
          styles.paraText,
          {marginBottom: 40, maxWidth: 250, lineHeight: 20},
        ]}>
        Hey, Enter your account credentials to get log in to your account
      </Text>
      <LoginComponent navigation={navigation} />
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
    marginTop: 20,
    padding: 20,
  },
  paraText: {
    color: 'grey',
    fontWeight: 'normal',
  },
});
