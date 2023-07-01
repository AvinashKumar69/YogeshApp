import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/AuthStack/Login';
import UserOnboardingDetails from '../screens/AuthStack/UserOnboardingDetails';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
      // initialRouteName="UserOnboardingDetails"
      initialRouteName="Login"
      >
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen
        name="UserOnboardingDetails"
        component={UserOnboardingDetails}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
