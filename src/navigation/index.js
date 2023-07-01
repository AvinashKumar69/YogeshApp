import React, {useContext} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

import Colors from '../common/Colors';
import {AuthenticationContext} from '../services/AuthContext';
import AuthStack from './AuthStack';
import OnboardingStack from './OnboardingStack';
import UserStack from './UserStack';

export const NavigationRoot = () => {
  const {isUserOnboarded, initializing, isLoggedIn} = useContext(
    AuthenticationContext,
  );

  if (initializing) {
    return (
      <View>
        <ActivityIndicator
          size={100}
          style={styles.activityIndicator}
          color={Colors.Egyption_Blue}
        />
      </View>
    );
  } else {
    if (isLoggedIn && !isUserOnboarded) {
      return <OnboardingStack />;
    } else if (!!isLoggedIn) {
      return <UserStack />;
    } else {
      return <AuthStack />;
    }
  }
};

const styles = StyleSheet.create({
  activityIndicator: {
    height: '100%',
    width: '100%',
  },
});
