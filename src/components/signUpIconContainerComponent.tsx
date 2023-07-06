import React, {useContext, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {AppleIcon, FacebookIcon, GoogleIcon} from '../../assets/svg';

type Props = {
  onGooglePress: () => void;
};
export const SignUpIconContainerComponent: React.FC<Props> = ({
  onGooglePress,
}) => {
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity
        style={styles.googleContainer}
        onPress={() => onGooglePress()}>
        <GoogleIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookContainer}>
        <FacebookIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.appleContainer}>
        <AppleIcon />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    paddingHorizontal: 30,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appleContainer: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  facebookContainer: {
    backgroundColor: '#1877F2',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  googleContainer: {
    backgroundColor: 'lightgray',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
