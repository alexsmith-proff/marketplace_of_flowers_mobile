import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import CatalogScreen from '../../screens/CatalogScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={HomeScreen} options={{title: 'Главная'}} />
            <Tab.Screen name="Catalog" component={CatalogScreen} options={{title: 'Каталог'}} />
        </Tab.Navigator>
    );
}

export default BottomTabs