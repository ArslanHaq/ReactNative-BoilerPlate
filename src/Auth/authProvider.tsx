import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = React.createContext({
  user: undefined,
  setUser: (user: any) => {},
  login: (email: string, password: string) => {},
  register: (email: string, password: string) => {},
  logout: () => {},
});

export const AuthProvider: React.FC<any> = ({children}) => {
  const [user, setUser] = React.useState(undefined);

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
      }}>
      {children}
    </AuthContext.Provider>
  );
};
