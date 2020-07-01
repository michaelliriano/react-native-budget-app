import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return <View style={styles.container}>Hello</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
