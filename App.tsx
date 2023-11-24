/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import MainLayout from './src/layouts/MainLayout/MainLayout';
import MainSlider from './src/modules/MainSlider/MainSlider';
import { GetSection } from './src/services/core/requests';
import { ISection } from './src/interfaces/section.interface';
import Privileges from './src/modules/Privileges/Privileges';
import MainCards from './src/modules/MainCards/MainCards';

function App(): JSX.Element {
  const [mainSliderData, setMainSliderData] = useState<ISection | null>(null)
  const [privelegesSliderData, setPrivelegesSliderData] = useState<ISection | null>(null)
  const [mainCardData, setMainCardData] = useState<ISection | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      const mainSlider = await GetSection('bigSlider')
      const privelegesSlider = await GetSection('privilegii')
      const mainCardSlider = await GetSection('mainCard')
      setMainSliderData(mainSlider)
      setPrivelegesSliderData(privelegesSlider)
      setMainCardData(mainCardSlider)
    }
    fetchData()
  }, [])
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#eee'} />
      <MainLayout>
        <View>
          {/* <ScrollView> */}
          <MainSlider slider={mainSliderData as ISection} />
          <Privileges slider={privelegesSliderData as ISection} />
          <MainCards slider={mainCardData as ISection} />
          {/* </ScrollView> */}
        </View>
      </MainLayout>
    </SafeAreaView>
  );
}

export default App;
