import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import UserHome from '../screens/UserStack/UserHome';
import Profile from '../screens/UserStack/Profile';

const Tab = createMaterialTopTabNavigator();

const UserStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="UserHome" component={UserHome} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default UserStack;
