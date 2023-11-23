/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import MainLayout from './src/layouts/MainLayout/MainLayout';
import MainSlider from './src/modules/MainSlider/MainSlider';
import { GetSection } from './src/services/core/requests';
import { ISection } from './src/interfaces/section.interface';
import Privileges from './src/modules/Privileges/Privileges';

function App(): JSX.Element {
  const [mainSliderData, setMainSliderData] = useState<ISection | null>(null)
  const [privelegesSliderData, setPrivelegesSliderData] = useState<ISection | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      const mainSlider = await GetSection('bigSlider')
      const privelegesSlider = await GetSection('privilegii')
      setMainSliderData(mainSlider)
      setPrivelegesSliderData(privelegesSlider)
    }
    fetchData()
  }, [])
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#eee'} />
      <MainLayout>
        <View>
          <MainSlider slider={mainSliderData as ISection} />
          <Privileges slider={privelegesSliderData as ISection} />
        </View>
      </MainLayout>
    </SafeAreaView>
  );
}

export default App;
