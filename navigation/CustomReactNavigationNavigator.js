import React from 'react'
import { MainTabNavigator } from './BasicReactNavigationSetup'

class CustomReactNavigationNavigator extends React.Component {
  static router = MainTabNavigator.router

  state = {
    timesTabbed: 0
  }

  componentDidMount = () => {
    const { navigation } = this.props

    navigation.addListener('didFocus', this.incrementTimesTabbed)
  }

  incrementTimesTabbed = () => {
    const { timesTabbed } = this.state

    this.setState({ timesTabbed: timesTabbed + 1 })
  }

  render() {
    const { timesTabbed } = this.state
    const { navigation } = this.props

    return (
      <MainTabNavigator
        navigation={navigation}
        screenProps={{
          tabCounter: timesTabbed,
          onDidTab: this.incrementTimesTabbed,
        }}
      />
    )
  }
}

export default CustomReactNavigationNavigator
