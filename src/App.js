import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import Header from './components/Header';
import Increment from './components/Increment';

class App extends Component {

  incrementValue() {
    this.setState({ intValue: this.state.intValue + 1 });
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Header>Increment App</Header>
          <Text>{}</Text>
          <Increment onPress={this.incrementValue} />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
