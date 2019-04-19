import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationEvents } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default class BaseScreen extends React.Component {
  render() {
    const { tabCounter, onDidTab } = this.props.screenProps || { tabCounter: null, onDidTab: () => null }
    const { screenName } = this.props

    return (
      <View style={styles.container}>
        <NavigationEvents
          onDidBlur={onDidTab}
        />
        <Text>Hi from the {screenName} Screen</Text>
        <Text>You've tabbed {tabCounter} times.</Text>
      </View>
    );
  }
}
