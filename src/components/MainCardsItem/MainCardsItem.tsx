import { FC } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

import { s } from './MainCardsItem.styles'
import CardPrice from "../../ui/CardPrice/CardPrice";
import ToCartBtn from "../Buttons/ToCartBtn/ToCartBtn";

interface MainCardsItemProps {
    productID: number
    uri: string
    title: string
    subtitle: string
    price: number
    crossPrice: number
    isBuyProduct: boolean
    onPressProduct: (productID: number) => void
    onPressAddToCart: (e: any, isActiveBtn: boolean, productID: number) => void
}

const MainCardsItem: FC<MainCardsItemProps> = ({ productID, uri, title, subtitle, price, crossPrice, isBuyProduct, onPressProduct, onPressAddToCart }) => {
    const handlePressProduct = () => {
        // onClickProduct(productID)
    }
    const handleAddToCart = (e: any, isActiveBtn: boolean) => {
        // onPressAddToCart(e, isActiveBtn, productID)
    }
    return (
        <TouchableOpacity onPress={handlePressProduct} activeOpacity={0.9}>
            <View style={s.item}>
                <Image style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }} source={{ uri }} width={274} height={250} />
                <View style={s.info}>
                    <View>
                        <Text>{title}</Text>
                        <Text>{subtitle}</Text>
                    </View>
                    <View style={s.priceCart}>
                        <CardPrice actualPrice={price} crossPrice={crossPrice} size={16} />
                        <ToCartBtn dark={true} textAfterClick="В корзине" isBuyProduct={isBuyProduct} onPress={handleAddToCart} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MainCardsItem