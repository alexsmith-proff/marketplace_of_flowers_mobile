import React, { FC } from 'react';
import { View, Image } from 'react-native'

import { s } from './Star.styles'

interface StarProps {
    stars: number
}

const Star: FC<StarProps> = ({ stars }) => {
    return (
        <View style={s.starsList}>
            {
                stars && Array.from({ length: stars }).map((_, index) => (
                    <View style={s.star} key={index}>
                        <Image source={require('../../assets/img/star.png')} />
                    </View>
                )
                )
            }
        </View>
    );
};

export default Star;