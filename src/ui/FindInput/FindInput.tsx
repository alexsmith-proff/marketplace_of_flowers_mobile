import { FC } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

import { s } from './FindInput.styles'

interface FindInputProps {
    placeholder: string
    value: string
    onChangeText: (text: string) => void
}

const FindInput: FC<FindInputProps> = ({ placeholder, value, onChangeText }) => {
    return (
        <View style={s.wrap}>
            <TextInput style={s.input} value={value} onChangeText={onChangeText} placeholder={placeholder} />
            <TouchableOpacity style={s.btn} activeOpacity={0.5}>
                <Image style={s.img} source={require('../../assets/img/find-btn.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default FindInput