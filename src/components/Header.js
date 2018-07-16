import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default (props) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{props.children}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    padding: 20,
    paddingTop: 30,
    backgroundColor: '#efefef',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  headerText: {
    fontSize: 20
  }
});
