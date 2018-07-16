import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Increment extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.value}>{this.props.value}</Text>
        <Button title="Increment" />
      </View>
    );
  }
}

const mapStateToProps = state => ({ ...state.incrementReducer });

export default connect(mapStateToProps)(Increment);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  value: {
    fontSize: 18,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#eee'
  }
});
