import { FC, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";

interface ToCartBtnProps {
    dark?: boolean
    textAfterClick?: string
    isBuyProduct?: boolean
    onPress?: (e: any, isBuy: boolean) => void | undefined
    paddingTopBottom?: number
}

const ToCartBtn: FC<ToCartBtnProps> = ({ dark = false, textAfterClick, isBuyProduct, onPress, paddingTopBottom = 8 }) => {
    const [isBuy, setIsBuy] = useState<boolean | undefined>(isBuyProduct)

    const ico = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"></path></svg>'

    const handlePressBtn = (e: any) => {
        setIsBuy(!isBuy)
        if (onPress) onPress(e, isBuy as boolean)
    }

    return (
        <View>
            <TouchableOpacity onPress={handlePressBtn} activeOpacity={0.9}>
                <View
                    style={{
                        paddingTop: paddingTopBottom,
                        paddingBottom: paddingTopBottom,
                        flexDirection: "row",
                        alignItems: 'center',
                        paddingHorizontal: 14,
                        backgroundColor: dark ? (isBuy ? '#FFFFFF' : '#E2195B') : (isBuy ? '#E2195B' : '#FFFFFF'),
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: dark ? (isBuy ? '#E2195B' : 'transparent') : (isBuy ? 'transparent' : '#E2195B'),
                        borderRadius: 5,
                    }}
                >
                    <SvgXml style={{
                        marginRight: 10,
                    }} color={dark ? (isBuy ? '#E2195B' : '#FFFFFF') : (isBuy ? '#FFFFFF' : '#E2195B')}
                        xml={ico} width={20} height={20} />
                    <Text style={{
                        fontSize: 14,
                        lineHeight: 20,
                        color: dark ? (isBuy ? '#E2195B' : '#FFFFFF') : (isBuy ? '#FFFFFF' : '#E2195B'),
                    }}
                    >
                        {isBuy ? (textAfterClick ? textAfterClick : 'В корзине') : 'В корзину'}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ToCartBtn