import { FC } from "react";
import { View, Text, Image } from "react-native";


import { s } from './PartitionItem.styles'

interface PartitionItemProps {
    uri: string
    title: string
    price: string
}

const PartitionItem: FC<PartitionItemProps> = ({ uri, title, price }) => {
    return (
        <View style={s.item} >
            <Image style={s.img} source={{ uri: uri }} width={278} height={251} />
            <View style={s.info}>
                <Text style={s.title}>{title}</Text>
                <Text style={s.price}>от <Text style={s.priceText}>{price}</Text> ₽</Text>
            </View>
        </View >
    )
}

export default PartitionItem