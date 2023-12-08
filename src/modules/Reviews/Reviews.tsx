import { FC } from "react";
import { View, Text, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { SERVER_URL } from "@env";
import { ISection } from "../../interfaces/section.interface";

import { s } from './Reviews.styles'
import ReviewItem from "../../components/Reviews/ReviewItem";
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from "../../services/core/parse";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

interface ReviewsProps {
    slider: ISection
}

const Reviews: FC<ReviewsProps> = ({ slider }) => {
    const { width } = Dimensions.get("screen")
    return (
        <View style={s.section}>
            <Text style={s.title}>Отзывы наших покупателей</Text>
            {
                slider ? (
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
                ) : (
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
                        data={[{}, {}]}
                        renderItem={({ item }) => <SkeletonPlaceholder borderRadius={5}>
                            <SkeletonPlaceholder.Item paddingHorizontal={20}>
                                <SkeletonPlaceholder.Item width={width - 60} height={340} marginBottom={20} />
                                <SkeletonPlaceholder.Item width={120} height={120} borderRadius={120} />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder>}
                    />
                )
            }
        </View>
    )
}

export default Reviews