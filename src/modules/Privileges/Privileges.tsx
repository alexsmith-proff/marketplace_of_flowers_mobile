import { FC } from "react";
import { Dimensions, View } from "react-native";
import { ISection } from "../../interfaces/section.interface";
import Carousel from "react-native-snap-carousel";
import PrivilegeItem from "./components/PrivilegeItem/PrivilegeItem";
import { SERVER_URL } from "@env";

import { s } from './Privileges.styles'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

interface PrivilegesProps {
    slider: ISection
}

const Privileges: FC<PrivilegesProps> = ({ slider }) => {
    const { width } = Dimensions.get("screen")
    return (
        <View style={s.section}>
            {
                slider ? (
                    <Carousel
                    style={{backgroundColor: '#aaa'}}
                        sliderWidth={width}
                        itemWidth={250}
                        layout="default"
                        layoutCardOffset={0}
                        loop
                        // autoplay={true}
                        // autoplayDelay={0}
                        // autoplayInterval={8000}
                        inactiveSlideOpacity={1.0}
                        inactiveSlideScale={1.0}
                        activeSlideAlignment="start"
                        data={slider.elements}
                        renderItem={({ item }) => <PrivilegeItem uri={`${SERVER_URL}/${item.img_elements[0].filename}`} slide={item} />}
                    />
                ) : (
                    <Carousel
                    style={{backgroundColor: '#aaa'}}
                        sliderWidth={width}
                        itemWidth={250}
                        layout="default"
                        layoutCardOffset={0}
                        loop
                        inactiveSlideOpacity={1.0}
                        inactiveSlideScale={1.0}
                        activeSlideAlignment="start"
                        data={[{}, {}]}
                        renderItem={({ item }) => <SkeletonPlaceholder borderRadius={4}>
                        <SkeletonPlaceholder.Item width={230} height={100} />
                    </SkeletonPlaceholder>}
                    />
                )
            }
        </View>
    )
}

export default Privileges