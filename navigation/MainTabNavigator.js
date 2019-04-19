import { createStackNavigator, createBottomTabNavigator, withNavigation } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

export default withNavigation(createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
}))
