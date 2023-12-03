import { FC } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { SERVER_URL } from "@env";
import { ISection } from "../../interfaces/section.interface";
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from "../../services/core/parse";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
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
                slider ? (
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
                ) : (
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
                        data={[{}, {}]}
                        renderItem={({ item }) => <SkeletonPlaceholder borderRadius={4}>
                            <SkeletonPlaceholder.Item width={278}>
                                <SkeletonPlaceholder.Item width={278} height={251} borderRadius={5} marginBottom={20} />
                                <SkeletonPlaceholder.Item alignItems="center">
                                    <SkeletonPlaceholder.Item width={120} height={15} marginBottom={15} />
                                    <SkeletonPlaceholder.Item width={60} height={15} />
                                </SkeletonPlaceholder.Item>
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder>}
                    />
                )
            }
        </View>
    )
}

export default Partition