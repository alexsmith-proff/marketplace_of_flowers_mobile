import { FC } from "react";
import { Text, View } from "react-native";

import {s} from './MainLayout.styles'

interface MainLayoutProps{}

const MainLayout: FC<MainLayoutProps> = ({}) => {
    return(
        <View style={s.container}>
            <Text>rtyrtyrty</Text>
        </View>
    )
}

export default MainLayout