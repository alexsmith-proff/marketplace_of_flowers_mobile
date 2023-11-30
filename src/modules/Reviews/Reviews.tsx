import { FC } from "react";
import { View, Text, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { SERVER_URL } from "@env";
import { ISection } from "../../interfaces/section.interface";

import { s } from './Reviews.styles'
import ReviewItem from "../../components/Reviews/ReviewItem";
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from "../../services/core/parse";

interface ReviewsProps {
    slider: ISection
}

const Reviews: FC<ReviewsProps> = ({ slider }) => {
    const { width } = Dimensions.get("screen")
    return (
        <View style={s.section}>
            <Text style={s.title}>Отзывы наших покупателей</Text>
            {
                slider && (
                    <Carousel
                        style={{ backgroundColor: '#aaa' }}
                        sliderWidth={width - 20}
                        itemWidth={width - 20}
                        layout="default"
                        layoutCardOffset={0}
                        loop
                        autoplay={true}
                        autoplayDelay={0}
                        autoplayInterval={8000}
                        inactiveSlideOpacity={1.0}
                        inactiveSlideScale={0.95}
                        activeSlideAlignment="start"
                        data={slider.elements}
                        renderItem={({ item }) => <ReviewItem
                            star={getTextInTextBlockFromElement(item, 'ocenka')}
                            name={getTextInTextBlockFromElement(item, 'name')}
                            text={getTextInTextBlockFromElement(item, 'otzyv')}
                            bouquet={getTextInTextBlockFromElement(item, 'otzyv-k-buketu')}
                            uri={`${SERVER_URL}/${getFileNameInImgBlockFromElement(item, 'izobrazhenie')}`}
                        />}
                    />
                )
            }
        </View>
    )
}

export default Reviews