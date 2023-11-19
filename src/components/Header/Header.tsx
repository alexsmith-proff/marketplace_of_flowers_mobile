import { FC, useState } from "react";
import { View } from "react-native";
import FindInput from "../../ui/FindInput/FindInput";
import Logo from "../../ui/Logo/Logo";
import BurgerMenu from "../../ui/BurgerMenu/BurgerMenu";
import { IMenu } from "../../interfaces/menu.interface";

import { s } from './Header.styles'

interface HeaderProps{
    headerMenu: IMenu
}

const Header: FC<HeaderProps> = ({ headerMenu }) => {
    const [findText, setFindText] = useState<string>('')
    return(
        <View style={s.wrap}>
            <Logo />
            <FindInput value={findText} placeholder="Поиск..." onChangeText={setFindText} />
            <BurgerMenu menu={headerMenu} />
        </View>
    )
}

export default Header