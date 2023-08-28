import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import React, {useContext, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import Colors from '../../common/Colors';
import {onGoogleButtonPress} from '../../queries/loginQueries';
import {getUser} from '../../queries/userQueries';
import {AuthenticationContext} from '../../services/AuthContext';

const Login = () => {
  const {setIsUserOnboarded} = useContext(AuthenticationContext);
  const [showLoader, setShowLoader] = useState(false);

  const googleSigninHandler = () => {
    setShowLoader(true);
    onGoogleButtonPress()
      .then(userDetails => {
        if (userDetails) {
          const uid = userDetails?.user?.uid;
          getUser(uid).then(firestoreDoc => {
            if (firestoreDoc.exists) {
              setIsUserOnboarded(true);
              // setShowLoader(false);
            }
            // setShowLoader(false);
          });
          // ToDo: do something here
        }
        setShowLoader(false);
      })
      .catch(error => {
        setShowLoader(false);
        console.error('Error:-', error);
      });
  };

  return (
    <View style={styles.loginContainer}>
      {showLoader ? (
        <ActivityIndicator
          size={100}
          style={styles.activityIndicator}
          color={Colors.Egyptian_Blue}
        />
      ) : (
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={googleSigninHandler}
          //   disabled={this.state.isSigninInProgress}
        />
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: Colors.Gray98,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    height: '100%',
    width: '100%',
  },
});
