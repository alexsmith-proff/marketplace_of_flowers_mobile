import { FC } from "react";
import { Image, Touchable, TouchableOpacity, View } from "react-native";
import { IMenu } from "../../interfaces/menu.interface";

import { s } from './BurgerMenu.styles'

interface BurgerMenuProps {
    menu: IMenu
}

const BurgerMenu: FC<BurgerMenuProps> = ({ menu }) => {
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <Image style={s.img} source={require('../../assets/img/burger-menu.png')} />
        </TouchableOpacity>
    )
}

export default BurgerMenu