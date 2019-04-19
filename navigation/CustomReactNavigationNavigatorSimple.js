import React from 'react'
import { MainTabNavigator } from './BasicReactNavigationSetup'

class CustomReactNavigationNavigatorSimple extends React.Component {
  static router = MainTabNavigator.router

  render() {
    return (
      <MainTabNavigator navigation={this.props.navigation} />
    )
  }
}

export default CustomReactNavigationNavigatorSimple
