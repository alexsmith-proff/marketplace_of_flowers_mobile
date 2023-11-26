import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { ParamListBase, useNavigation, } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import MainLayout from '../layouts/MainLayout/MainLayout';

interface CatalogScreenProps { }
const CatalogScreen: FC<CatalogScreenProps> = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    return (
        <MainLayout>
            <View>
                <Text>ddfdf</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>Press to back</Text>
                </TouchableOpacity>
            </View>
        </MainLayout>
    );
}

export default CatalogScreen;
