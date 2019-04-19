import React from 'react'
import BaseScreen from './BaseScreen'

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <BaseScreen screenName="Home" {...this.props} />
    )
  }
}

export default HomeScreen
