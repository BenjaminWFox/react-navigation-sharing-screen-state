import React from 'react'
import MainTabNavigator from './MainTabNavigator'

class TabsScreensExposedCustomRouter extends React.Component {
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

    return (
      <MainTabNavigator screenProps={{
        tabCounter: timesTabbed,
        onDidTab: this.incrementTimesTabbed,
      }} />
    )
  }
}

export default TabsScreensExposedCustomRouter
