import React, { FC } from "react";
import { ScrollView, View } from "react-native";
import FooterMenu from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { IMenu } from "../../interfaces/menu.interface";

import {s} from './MainLayout.styles'

const data: IMenu = {
    id: 1,
    name: 'menu1',
    items: [
        {
            id: 1,
            link: '/',
            name: 'Розы',
            slug: 'rozy',
            serial_number: 1,
            submenuitems: [
                {
                    id: 1,
                    link: '/1',
                    name: 'qqq',
                    serial_number: 32,
                    slug: 'qwe'
                }
            ]
        }
    ]
}

interface MainLayoutProps{
    children: React.ReactElement
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return(
        <View style={s.container}>
            <Header headerMenu={data} />
            <ScrollView>
                {children}
            </ScrollView>
            <FooterMenu />
        </View>
    )
}

export default MainLayout