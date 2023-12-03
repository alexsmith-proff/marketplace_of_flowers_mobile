import { FC } from "react";
import { View, Text, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { SERVER_URL } from "@env";
import { ISection } from "../../interfaces/section.interface";
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from "../../services/core/parse";
import PartitionItem from "../../components/PartitionItem/PartitionItem";

import { s } from './Partition.styles'

interface PartitionProps {
    slider: ISection
}

const Partition: FC<PartitionProps> = ({ slider }) => {
    const { width } = Dimensions.get("screen")
    return (
        <View>
            <Text style={s.title}>Разделы</Text>
            {
                slider && (
                    <Carousel
                        style={{ backgroundColor: '#aaa' }}
                        sliderWidth={width}
                        itemWidth={310}
                        layout="default"
                        layoutCardOffset={0}
                        loop
                        autoplay={true}
                        autoplayDelay={0}
                        autoplayInterval={8000}
                        inactiveSlideOpacity={1.0}
                        inactiveSlideScale={1}
                        activeSlideAlignment="start"
                        data={slider.elements}
                        renderItem={({ item }) => <PartitionItem
                            uri={`${SERVER_URL}/${getFileNameInImgBlockFromElement(item, 'image')}`}
                            title={getTextInTextBlockFromElement(item, 'title')}
                            price={getTextInTextBlockFromElement(item, 'cena')}
                        />}
                    />
                )
            }
        </View>
    )
}

export default Partition