import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import UserOnboardingDetails from '../screens/AuthStack/UserOnboardingDetails';

const Stack = createNativeStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
      initialRouteName="UserOnboardingDetails">
      <Stack.Screen
        name="UserOnboardingDetails"
        component={UserOnboardingDetails}
      />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
