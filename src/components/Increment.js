import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default (props) => (
  <View style={styles.container}>
    <Text style={styles.value}>{props.value}</Text>
    <Button onPress={() => props.onPress()} title="Increment" />
  </View>
);

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
