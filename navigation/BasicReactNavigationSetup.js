import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

export const MainTabNavigator = createBottomTabNavigator({
  HomeScreen,
  LinksScreen,
  SettingsScreen,
})

export default createAppContainer(MainTabNavigator);
