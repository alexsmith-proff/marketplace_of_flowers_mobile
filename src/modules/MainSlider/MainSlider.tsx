/* eslint-disable */

import { FC } from "react"
// import { s } from './MainSlider.styles'
import { ISection } from "../../interfaces/section.interface"
import { View, Text, Image, Dimensions, StyleSheet } from "react-native"
import Carousel from "react-native-snap-carousel"
import MainSliderItem from "./components/MainSliderItem/MainSliderItem"
import { SERVER_URL } from "@env"
import SkeletonPlaceholder from "react-native-skeleton-placeholder"

interface MainSliderProps {
    slider: ISection
}

const MainSlider: FC<MainSliderProps> = ({ slider }) => {
    const { width } = Dimensions.get("screen")

    return (
        <View>
            {
                slider ? (
                    <Carousel
                        sliderWidth={width}
                        itemWidth={width}
                        layout="default"
                        layoutCardOffset={0}
                        loop
                        autoplay={true}
                        autoplayDelay={0}
                        autoplayInterval={7000}
                        inactiveSlideOpacity={0.2}
                        data={slider.elements}
                        renderItem={({ item }) => <MainSliderItem width={width} height={250} uri={`${SERVER_URL}/${item.img_elements[0].filename}`} slider={item} />}
                    />
                ) : (
                    <Carousel
                        sliderWidth={width}
                        itemWidth={width}
                        layout="default"
                        layoutCardOffset={0}
                        loop
                        autoplay={true}
                        autoplayDelay={0}
                        autoplayInterval={7000}
                        inactiveSlideOpacity={0.2}
                        data={[{}, {}]}
                        renderItem={({ item }) => <SkeletonPlaceholder borderRadius={10}>
                            <SkeletonPlaceholder.Item width={width-20} height={250} />
                        </SkeletonPlaceholder>}
                    />
                )
            }

        </View>
    )
}

export default MainSlider