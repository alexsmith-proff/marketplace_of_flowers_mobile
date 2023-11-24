import { FC } from "react";
import { Dimensions, View, Text } from "react-native";
import { ISection } from "../../interfaces/section.interface";
import Carousel from "react-native-snap-carousel";
import MainCardsItem from "../../components/MainCardsItem/MainCardsItem";
import { SERVER_URL } from "@env";

import { s } from './MainCards.styles'

interface MainCardsProps {
    slider: ISection
}

const MainCards: FC<MainCardsProps> = ({ slider }) => {
    const { width } = Dimensions.get("screen")

    const handlePress = (productID: number) => {
        // dispatch(addViewedProduct(cards.elements.find(item => item.id === productID).product_ref))
        // Переход на страницу товара
        // router.push(`/product/${cards.elements.find(item => item.id === productID).product_ref.id}`)
    }

    const handleAddToCart = (e: any, isEnable: boolean, productID: number) => {
        // Прервем передачу события клика родительскому элементу <li>, т.е. не сработает handleClickProduct 
        // e.stopPropagation()
        //Добавление товара в корзину
        // !isEnable ?
        // dispatch(addCartProduct({ ...cards.elements.find(item => item.id === productID).product_ref, count: 1 }))
        // : dispatch(deleteCartProduct(cards.elements.find(item => item.id === productID).product_ref.id))
    }
    return (
        <View style={s.section}>
            <Text style={s.title}>Букеты цветов с доставкой</Text>
            {
                slider && (
                    <Carousel
                        style={{ backgroundColor: '#aaa' }}
                        sliderWidth={width}
                        itemWidth={305}
                        layout="default"
                        layoutCardOffset={0}
                        loop
                        autoplay={true}
                        autoplayDelay={0}
                        autoplayInterval={8000}
                        inactiveSlideOpacity={1.0}
                        inactiveSlideScale={1.0}
                        activeSlideAlignment="start"
                        data={slider.elements}
                        renderItem={({ item }) => <MainCardsItem
                            productID={item.id}
                            uri={item.product_ref.main_image ? `${SERVER_URL}/${item.product_ref.main_image}` : '/img/nophoto.png'}
                            title={item.product_ref.name}
                            subtitle={item.product_ref.description}
                            price={item.product_ref.price}
                            crossPrice={item.product_ref.price + 500}
                            isBuyProduct={false}
                            onPressProduct={handlePress}
                            onPressAddToCart={handleAddToCart}
                        />}
                    />
                )
            }
        </View>
    )
}

export default MainCards