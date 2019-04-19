import { createBottomTabNavigator, withNavigation } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default withNavigation(createBottomTabNavigator({
  HomeScreen,
  LinksScreen,
  SettingsScreen,
}))
