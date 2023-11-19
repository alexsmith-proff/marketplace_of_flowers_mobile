import { FC } from "react";
import { View } from "react-native";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import Header from "../../components/Header/Header";

import {s} from './MainLayout.styles'

interface MainLayoutProps{}

const MainLayout: FC<MainLayoutProps> = ({}) => {
    return(
        <View style={s.container}>
            <Header />
            <FooterMenu />
        </View>
    )
}

export default MainLayout