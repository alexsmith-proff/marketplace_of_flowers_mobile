import { FC } from "react"
import Carousel from "react-native-snap-carousel"

import { s } from './MainSlider.styles'
import { ISection } from "../../interfaces/section.interface"
import { View, Text } from "react-native"

interface MainSliderProps {
    slider: ISection
}

const MainSlider: FC<MainSliderProps> = ({ slider }) => {
    console.log('aaaaaaaa',slider?.elements);
    
    return (
        <View>
            <Text>dfgdfg</Text>
            {
                slider && (
                    <Carousel
                        data={slider?.elements}
                        renderItem={({ item, index }) => (
                            <View key={item.id}>
                                <Text>{item.text_elements[index].text}</Text>
                            </View>
                        )}
                        sliderWidth={200}
                        itemWidth={200}
                    />
                    // <Text>{slider.elements[0].name}</Text>
                )
            }
        </View>
    )
}

export default MainSlider