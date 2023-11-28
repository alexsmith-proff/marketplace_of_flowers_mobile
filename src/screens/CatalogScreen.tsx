import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { ParamListBase, useNavigation, } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import MainLayout from '../layouts/MainLayout/MainLayout';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface CatalogScreenProps { }
const CatalogScreen: FC<CatalogScreenProps> = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    return (
        <MainLayout>
            <View>
                <Text>ddfdftttttd</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>Press to back</Text>
                </TouchableOpacity>
                <Icon name='delete' size={30} />
            </View>
        </MainLayout>
    );
}

export default CatalogScreen;
