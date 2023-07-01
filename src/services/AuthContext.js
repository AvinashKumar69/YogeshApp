import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {createContext, useEffect, useState} from 'react';

import {webClientId} from '../constants/googleSigninConfig';
import {getUser} from '../queries/userQueries';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
  GoogleSignin.configure({
    webClientId: webClientId,
  });

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(); // firebase auth user
  const [isUserOnboarded, setIsUserOnboarded] = useState(false); // checks user onboarding status

  // * handle user auth-state changes
  const onAuthStateChanged = user => {
    setUser(user);
    if (user) {
      // TODO:- do something here
      getUser(user?.uid).then(firestoreDoc => {
        if (firestoreDoc.exists) {
          setIsUserOnboarded(true);
        }
      });
    }
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  // **

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user || !!auth().currentUser,
        isLoggedIn: !!user,
        user,
        isUserOnboarded,
        setIsUserOnboarded,
        initializing,
        setInitializing,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
