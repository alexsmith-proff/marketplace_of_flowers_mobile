import { FC } from "react"
import { Text, View } from "react-native"

interface CardPriceProps {
    actualPrice: number
    crossPrice?: number
    size: number
}

const CardPrice: FC<CardPriceProps> = ({ actualPrice, crossPrice, size }) => {
    return (
        <View>
            <Text style={{fontSize: size, fontWeight: "700", lineHeight: 22, color: '#222A46'}}>{actualPrice} ₽</Text>
            {
                crossPrice ? <Text style={{fontSize: size, fontWeight: '400', lineHeight: 20, textDecorationLine: "line-through", color: '#B0B2B9',}}>{crossPrice} ₽</Text> : <></>
            }
        </View>
    )
}

export default CardPrice