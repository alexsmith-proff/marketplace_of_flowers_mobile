import { FC } from "react";
import { Image, Text, View } from "react-native";
import { IElement } from "../../../../interfaces/section.interface";

import { s } from './PrivilegeItem.styles'

interface PrivilegeItemProps {
    uri: string,
    slide: IElement
}

const PrivilegeItem: FC<PrivilegeItemProps> = ({ uri, slide }) => {
    return (
        <View style={s.item}>
            <Image source={{ uri: uri }} width={32} height={32} />
            <Text style={s.text}>{slide.text_elements[0].text}</Text>
        </View>
    )
}

export default PrivilegeItem