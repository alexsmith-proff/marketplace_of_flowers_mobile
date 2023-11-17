/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#eee'} />
      <View>
        <ScrollView>
          <Text>Hello my marketplace of flowers</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default App;
