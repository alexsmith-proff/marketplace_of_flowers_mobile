import { FC, useState } from "react";
import { View } from "react-native";
import FooterMenuItem from "./FooterMenuItem/FooterMenuItem";

import { s } from './Footer.styles'

type menuItem = {
    name: string,
    ico: string,
    icoActive: string,
    link: string,
}

interface FooterMenuProps { }


const FooterMenu: FC<FooterMenuProps> = ({ }) => {
    const [activeIndexMenu, setActiveIndexMenu] = useState<number>(0)
    const menu: menuItem[] = [
        {
            name: 'Главная',
            ico: '<svg stroke="#000" fill="#000" stroke-width="0" viewBox="0 0 1024 1024" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg>',
            icoActive: '<svg stroke="#000" fill="#000" stroke-width="0" viewBox="0 0 1024 1024" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path></svg>',
            link: '/',
        },
        {
            name: 'Каталог',
            ico: '<svg stroke="#000" fill="#000" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M18 2C18.5523 2 19 2.44772 19 3V11H17V4H7V20H11V22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2H18ZM15 12C17.2091 12 19 13.7909 19 16C19 16.7419 18.798 17.4366 18.446 18.0322L20.6569 20.2426L19.2426 21.6569L17.0313 19.4466C16.4359 19.7982 15.7415 20 15 20C12.7909 20 11 18.2091 11 16C11 13.7909 12.7909 12 15 12ZM15 14C13.8954 14 13 14.8954 13 16C13 17.1046 13.8954 18 15 18C16.1046 18 17 17.1046 17 16C17 14.8954 16.1046 14 15 14Z"></path></svg>',
            icoActive: '<svg stroke="#000" fill="#000" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M18 2C18.5523 2 19 2.44772 19 3L19.0009 11.5286C17.9393 10.578 16.5371 10 15 10C11.6863 10 9 12.6863 9 16C9 19.2384 11.76 22 15 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2H18ZM15 12C17.2091 12 19 13.7909 19 16C19 16.7418 18.7981 17.4365 18.4462 18.032L20.6569 20.2426L19.2426 21.6569L17.032 19.4462C16.4365 19.7981 15.7418 20 15 20C12.7909 20 11 18.2091 11 16C11 13.7909 12.7909 12 15 12ZM15 14C13.8954 14 13 14.8954 13 16C13 17.1046 13.8954 18 15 18C16.1046 18 17 17.1046 17 16C17 14.8954 16.1046 14 15 14Z"></path></svg>',
            link: '/',
        },
        {
            name: 'Корзина',
            ico: '<svg stroke="#000" fill="#000" stroke-width="0" viewBox="0 0 256 256" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M220.61,60.16A6,6,0,0,0,216,58H53L47.83,29.5A14,14,0,0,0,34.05,18H16a6,6,0,0,0,0,12h18a2,2,0,0,1,2,1.64l25.51,140.3a21.93,21.93,0,0,0,6.24,11.77A26,26,0,1,0,105.89,190h52.22A26,26,0,1,0,180,178H83.17a10,10,0,0,1-9.84-8.21L69.73,150H188.1a22,22,0,0,0,21.65-18.06L221.9,65.07A6,6,0,0,0,220.61,60.16ZM98,204a14,14,0,1,1-14-14A14,14,0,0,1,98,204Zm96,0a14,14,0,1,1-14-14A14,14,0,0,1,194,204Zm3.94-74.21A10,10,0,0,1,188.1,138H67.55L55.19,70H208.81Z"></path></svg>',
            icoActive: '<svg stroke="#000" fill="#000" stroke-width="0" viewBox="0 0 256 256" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM180,192a12,12,0,1,1-12,12A12,12,0,0,1,180,192Zm-96,0a12,12,0,1,1-12,12A12,12,0,0,1,84,192Z"></path></svg>',
            link: '/',
        },
        {
            name: 'Избранное',
            ico: '<svg stroke="#000" fill="#000" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>',
            icoActive: '<svg stroke="#000" fill="#000" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>',
            link: '/',
        },
        {
            name: 'Профиль',
            ico: '<svg stroke="#000" fill="#000" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"></path><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"></path></svg>',
            icoActive: '<svg stroke="#000" fill="#000" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z"></path></svg>',
            link: '/',
        },
    ]

    return (
        <View style={s.wrap}>
            {
                menu.map((item, index) => (
                    <FooterMenuItem
                        name={item.name}
                        ico={index === activeIndexMenu ? item.icoActive : item.ico}
                        onPress={() => setActiveIndexMenu(index)}
                        key={index}
                    />)
                )
            }
        </View>
    )
}

export default FooterMenu