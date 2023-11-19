/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import MainLayout from './src/layouts/MainLayout/MainLayout';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#eee'} />
      <MainLayout>
        <Text>Здесь будет контент...</Text>
      </MainLayout>
    </SafeAreaView>
  );
}

export default App;
