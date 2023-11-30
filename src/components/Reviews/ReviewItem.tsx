import React, { FC } from 'react';
import { View, Text, Image } from 'react-native'

import { s } from './ReviewItem.styles'
import Star from '../../ui/Star/Star';

interface ReviewItemProps {
    star: number
    name: string
    text: string
    bouquet: string
    uri: string

}

const ReviewItem: FC<ReviewItemProps> = ({ star, name, text, bouquet, uri }) => {
    return (
        // <View>
        //     <View style={s.reviews__slider} key={el.id}>
        //         <View style={s.reviews__sliderContainer}>
        //             <View style={s.reviews__sliderLeft}>
        //                 <Star stars={getTextInTextBlockFromElement(el, 'ocenka')} />
        //                 <Text style={s.reviews__sliderName}>{getTextInTextBlockFromElement(el, 'name')}</Text>
        //                 <Text style={s.reviews__sliderText}>{getTextInTextBlockFromElement(el, 'otzyv')}</Text>
        //                 <Text style={s.reviews__sliderBouquet}>Отзыв к букету: <Text>{getTextInTextBlockFromElement(el, 'otzyv-k-buketu')}</Text></Text>
        //             </View>
        //             <View style={s.reviews__sliderRight}>
        //                 <img src={process.env.API_URI + '/' + getFileNameInImgBlockFromElement(el, 'izobrazhenie')} alt={getTextInTextBlockFromElement(el, 'alt')} />
        //             </View>
        //         </View>
        //     </View>
        // </View>

        <View>
            <View style={s.slider}>
                <View style={s.sliderContainer}>
                    <View style={s.sliderLeft}>
                        <Star stars={star} />
                        <Text style={s.sliderName}>{name}</Text>
                        <Text style={s.sliderText}>{text}</Text>
                    </View>
                    <View style={s.sliderRight}>
                        <Text style={s.sliderBouquet}>Отзыв к букету: <Text style={s.sliderBouquetText}>{bouquet}</Text></Text>
                        <Image source={{uri: uri}} />
                    </View>
                </View>
            </View>
        </View>
    )
};

export default ReviewItem