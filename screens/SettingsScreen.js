import React from 'react'
import BaseScreen from './BaseScreen'

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings...',
  };

  render() {
    return (
      <BaseScreen screenName="Settings" {...this.props} />
    )
  }
}

export default SettingsScreen
