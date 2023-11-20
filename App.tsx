/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import MainLayout from './src/layouts/MainLayout/MainLayout';
import MainSlider from './src/components/MainSlider/MainSlider';
import { GetSection } from './src/services/core/requests';
import axios from 'axios';
import { ISection } from './src/interfaces/section.interface';

function App(): JSX.Element {
  const [sliderData, setSliderData] = useState<ISection | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      const slider = await GetSection('bigSlider')
      setSliderData(slider)
    }
    fetchData()

  }, [])
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#eee'} />
      <MainLayout>
        <MainSlider slider={sliderData as ISection} />
      </MainLayout>
    </SafeAreaView>
  );
}

export default App;
