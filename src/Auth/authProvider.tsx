import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

type user = {
  id: string;
  name: string | null;
  email: string;
  photo: string | null;
  familyName: string | null;
  givenName: string | null;
};
export const AuthContext = React.createContext({
  user: {
    id: '',
    name: '',
    email: '',
    photo: '',
    familyName: '',
    givenName: '',
  },
  setUser: (user: user) => {},
  login: (email: string, password: string) => {},
  register: (email: string, password: string) => {},
  logout: () => {},
  googleSignIn: () => {},
  googleSignOut: () => {},
  googleLogin: () => {},
});

export const AuthProvider: React.FC<any> = ({children}) => {
  const [user, setUser] = React.useState<any>({
    id: '',
    name: '',
    email: '',
    photo: '',
    familyName: '',
    givenName: '',
  });
  const [loggedIn, setLoggedIn] = React.useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '560072577161-03nrvjao9d9rq8bhcrdqs1ntfvb3ivn5.apps.googleusercontent.com',
      scopes: ['email', 'profile'],
      offlineAccess: true,
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email: string, password: string) => {
          try {
            await auth()
              .signInWithEmailAndPassword(email, password)
              .then(() => {
                console.warn('User account created & signed in!');
              })
              .catch(error => {
                if (error.code === 'auth/user-not-found') {
                  console.error(
                    'User not found. Please check your email and password.',
                  );
                } else if (error.code === 'auth/wrong-password') {
                  console.error('Incorrect password. Please try again.');
                } else if (error.code === 'auth/invalid-email') {
                  console.log(
                    'Invalid email format. Please enter a valid email address.',
                  );
                } else {
                  console.error('An error occurred during login:', error);
                }
              });
          } catch (e) {
            console.error(e);
          }
        },
        register: async (email: string, password: string) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                console.log('User account created & signed in!');
              })
              .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                  console.error('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                  console.error('That email address is invalid!');
                }

                console.error(error);
              });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
        googleSignIn: async () => {
          try {
            await GoogleSignin.hasPlayServices({
              showPlayServicesUpdateDialog: true,
            });
            await GoogleSignin.signOut();
            try {
              const {user: user, idToken} = await GoogleSignin.signIn();
              setLoggedIn(true);
              const signInMethods = await auth().fetchSignInMethodsForEmail(
                user.email,
              );
              if (signInMethods.length > 0) {
                console.warn('User already created');
                await GoogleSignin.signOut();
                setLoggedIn(true);

                return;
              } else {
                const credential = auth.GoogleAuthProvider.credential(idToken);

                return await auth()
                  .signInWithCredential(credential)
                  .then(() => {
                    setLoggedIn(true);
                    console.log('User account created & signed in!');
                  });
              }
            } catch (error) {
              console.log('error', error);
            }
          } catch (error) {
            console.log('error', error);
          }
        },
        googleSignOut: async () => {
          try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            setLoggedIn(false);
            setUser(null);
          } catch (error) {
            console.error(error);
          }
        },
        googleLogin: async () => {
          try {
            GoogleSignin.signOut();
            await GoogleSignin.hasPlayServices();
            const {user, idToken} = await GoogleSignin.signIn();
            const signInMethods = await auth().fetchSignInMethodsForEmail(
              user.email,
            );
            if (signInMethods.length > 0) {
              setUser(user);
              setLoggedIn(true);
              return;
            } else {
              console.warn(
                'User not found. Please check your email and password.',
              );
            }
          } catch (error) {
            console.log('error', error);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
