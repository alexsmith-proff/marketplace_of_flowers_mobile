import React, { FC, useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import MainLayout from '../layouts/MainLayout/MainLayout';
import MainSlider from '../modules/MainSlider/MainSlider';
import Privileges from '../modules/Privileges/Privileges';
import MainCards from '../modules/MainCards/MainCards';
import { ParamListBase, useNavigation,  } from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { GetSection } from '../services/core/requests';
import { ISection } from '../interfaces/section.interface';
import Reviews from '../modules/Reviews/Reviews';


// interface HomeScreenProps {}

const HomeScreen: FC = ({}) => {
    const [mainSliderData, setMainSliderData] = useState<ISection | null>(null)
    const [privelegesSliderData, setPrivelegesSliderData] = useState<ISection | null>(null)
    const [mainCardData, setMainCardData] = useState<ISection | null>(null)
    const [reviewsData, setReviewsData] = useState<ISection | null>(null)

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    useEffect(() => {
        const fetchData = async () => {
            const mainSlider = await GetSection('bigSlider')
            const privelegesSlider = await GetSection('privilegii')
            const mainCardSlider = await GetSection('mainCard')
            const reviewsSlider = await GetSection('reviews')
            setMainSliderData(mainSlider)
            setPrivelegesSliderData(privelegesSlider)
            setMainCardData(mainCardSlider)
            setReviewsData(reviewsSlider)
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
                    <MainCards slider={mainCardData as ISection} />
                    {/* <TouchableOpacity onPress={() => navigation.navigate('Catalog')}>
                        <Text>qqqqqq</Text>
                    </TouchableOpacity> */}
                    <Reviews slider={reviewsData as ISection} />
                </View>
            </MainLayout>
        </SafeAreaView>
    );
}

export default HomeScreen;
