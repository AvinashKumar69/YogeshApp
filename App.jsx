/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {PaperProvider} from 'react-native-paper';

import {Theme} from './src/constants/ReactNativePaperThemeConfig';
import {NavigationRoot} from './src/navigation';
import {AuthenticationContextProvider} from './src/services/AuthContext';

function App() {
  return (
    <AuthenticationContextProvider>
      <NavigationContainer>
        <PaperProvider theme={Theme}>
          <NavigationRoot />
        </PaperProvider>
      </NavigationContainer>
    </AuthenticationContextProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
