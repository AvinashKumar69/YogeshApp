/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {StyleSheet} from 'react-native';
import {PaperProvider} from 'react-native-paper';

import {Theme} from './src/constants/ReactNativePaperThemeConfig';
import {NavigationRoot} from './src/navigation';
import {AuthenticationContextProvider} from './src/services/AuthContext';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <AuthenticationContextProvider>
      <NavigationContainer>
        <PaperProvider theme={Theme}>
          {/* // Provide the client to your App */}
          <QueryClientProvider client={queryClient}>
            <NavigationRoot />
          </QueryClientProvider>
        </PaperProvider>
      </NavigationContainer>
    </AuthenticationContextProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
