import React from 'react'
import BaseScreen from './BaseScreen'

class LinkScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <BaseScreen screenName="Link" {...this.props} />
    )
  }
}

export default LinkScreen
