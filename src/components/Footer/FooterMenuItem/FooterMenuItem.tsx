import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import { SvgXml } from 'react-native-svg';

import { s } from './FooterMenuItem.styles'

interface FooterMenuItemProps {
    name: string,
    ico: string,
    link?: string,
    onPress: () => void
}

const FooterMenuItem: FC<FooterMenuItemProps> = ({ name, ico, link, onPress }) => {
    return (
        <TouchableOpacity style={s.wrap} activeOpacity={0.7} onPress={onPress}>
            <SvgXml xml={ico} width={25} height={25} />
            <Text>{name}</Text>
        </TouchableOpacity>
    )
}

export default FooterMenuItem