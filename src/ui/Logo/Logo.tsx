import { FC } from "react";
import { Image } from "react-native";

import { s } from './Logo.styles'

interface LogoProps { }

const Logo: FC<LogoProps> = ({ }) => {
    return (
        <Image style={s.img} source={require('../../assets/img/logo.png')} resizeMode="contain" />
    )
}

export default Logo