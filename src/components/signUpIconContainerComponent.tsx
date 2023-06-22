import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {AppleIcon, FacebookIcon, GoogleIcon} from '../../assets/svg';
import {AuthContext} from '../Auth/authProvider';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const SignUpIconContainerComponent: React.FC = () => {
  const {user, setUser} = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState(null);

  // useEffect(() => {
  GoogleSignin.configure({
    scopes: ['email', 'profile'],
    offlineAccess: true,
    webClientId:
      '560072577161-03nrvjao9d9rq8bhcrdqs1ntfvb3ivn5.apps.googleusercontent.com',
  });
  const googleSignIn = async () => {
    try {
      console.log('googleSignIn');
      const response = await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      if (response) {
        console.log('hasPlayServices', response);
      }
      try {
        const {idToken} = await GoogleSignin.signIn();
        setLoggedIn(true);
        const credential = auth.GoogleAuthProvider.credential(idToken);
        return await auth()
          .signInWithCredential(credential)
          .then(() => {
            console.log('User account created & signed in!');
          });
      } catch (error) {
        console.log('error', error);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  const googleSignOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setLoggedIn(false);
      setUser(undefined);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity
        style={styles.googleContainer}
        onPress={() => googleSignIn()}>
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
