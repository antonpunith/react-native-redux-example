import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './components/Header';
import Increment from './components/Increment';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { intValue: 1 };
    // This binding is necessary to make `this` work in the callback
    this.incrementValue = this.incrementValue.bind(this);
  }
  incrementValue() {
    this.setState({ intValue: this.state.intValue + 1 });
  }
  render() {
    return (
      <View style={styles.container}>
        <Header>Increment App</Header>
        <Increment onPress={this.incrementValue} value={this.state.intValue} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
