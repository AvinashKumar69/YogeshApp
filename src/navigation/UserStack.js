import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../common/Colors';
import InShortsFeed from '../screens/UserStack/InShortsFeed';
import Profile from '../screens/UserStack/Profile';
import UserHome from '../screens/UserStack/UserHome';

const Tab = createMaterialTopTabNavigator();

const UserStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: Colors.Egyptian_Blue,
        },
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Notification')
            iconName = focused ? 'bell-ring' : 'bell-ring-outline';
          else if (route.name === 'Profile')
            iconName = focused ? 'account-tie' : 'account-tie-outline';
          else if (route.name === 'InShortsFeed')
            iconName = focused ? 'message-image' : 'message-image-outline';

          return (
            <MaterialCommunityIcons
              name={iconName}
              size={30}
              color={Colors.White}
            />
          );
        },
        tabBarShowLabel: false,
      })}
      tabBarPosition="top"
      initialRouteName="InShortsFeed"
      backBehavior="history">
      <Tab.Screen
        name="Notification"
        component={UserHome}
        options={{
          tabBarLabel: 'Notification',
          tabBarLabelStyle: styles.userStack_tabBarLabelStyle,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: styles.userStack_tabBarLabelStyle,
        }}
      />
      <Tab.Screen
        name="InShortsFeed"
        component={InShortsFeed}
        options={{
          tabBarLabel: 'InShortsFeed',
          tabBarLabelStyle: styles.userStack_tabBarLabelStyle,
        }}
      />
    </Tab.Navigator>
  );
};

export default UserStack;

const styles = StyleSheet.create({
  userStack_tabBarLabelStyle: {
    textTransform: 'capitalize',
    color: Colors.White,
    fontSize: 16,
  },
});
