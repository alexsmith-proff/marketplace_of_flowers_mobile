/* eslint-disable */

import { FC } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { IElement } from "../../../../interfaces/section.interface"
import { getTextInTextBlockFromElement } from "../../../../services/core/parse"

import { s } from './MainSliderItem.styles'

interface MainSliderItemProps {
    width: number
    height: number
    uri: string
    slider: IElement
}

const MainSliderItem: FC<MainSliderItemProps> = ({ width, height, uri, slider }) => {
    return (
        <View>
            <Image
                style={{ borderRadius: 10 }}
                source={{ uri: uri }}
                width={width - 20}
                height={height}
                resizeMode="cover"
            />
            <View style={s.info}>
                <Text style={s.MiddleText}>{getTextInTextBlockFromElement(slider, 'tekst-v-seredine')}</Text>
                <Text style={s.UnderText}>{getTextInTextBlockFromElement(slider, 'promokod-tekst')}</Text>
                <View style={s.Promo}>
                    <Text style={s.PromoText}>{getTextInTextBlockFromElement(slider, 'tekst-vnizu')}</Text>
                    <TouchableOpacity activeOpacity={0.5} >
                        <View style={s.PromoBtn}>
                            <Image source={require('../../../../assets/img/promo-btn-copy.png')} width={24} height={24} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default MainSliderItem