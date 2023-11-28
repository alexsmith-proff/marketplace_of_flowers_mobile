import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CatalogScreen from './src/screens/CatalogScreen';
import BottomTabs from './src/components/BottomTabs/BottomTabs';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={BottomTabs} />
        <Stack.Screen
          name="Catalog"
          component={CatalogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
