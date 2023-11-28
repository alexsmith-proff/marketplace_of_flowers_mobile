import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import CatalogScreen from '../../screens/CatalogScreen';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#999',
                tabBarStyle: {
                    height: 70,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingHorizontal: 5,
                    backgroundColor: '#eee',
                    //   position: 'absolute',
                    borderTopWidth: 2,
                    borderTopColor: '#000',
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Главная',
                    // headerShown: false,
                    tabBarIcon: ({ color }) => <Icons name='home' color={color} size={25} />
                }}
            />
            <Tab.Screen
                name="Catalog"
                component={CatalogScreen}
                options={{
                    title: 'Каталог',
                    headerShown: true,
                    tabBarIcon: ({ color }) => <Icons name='layers' color={color} size={25} />
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CatalogScreen}
                options={{
                    title: 'Корзина',
                    headerShown: true,
                    tabBarIcon: ({ color }) => <Icons name='cart' color={color} size={25} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={CatalogScreen}
                options={{
                    title: 'Профиль',
                    headerShown: true,
                    tabBarIcon: ({ color }) => <Icons name='account' color={color} size={25} />
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs