import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>iBudget</Text>
      <Button
        style={styles.btn}
        title="Let's Get Started"
        accessibilityLabel="Learn more about this purple button"
        color="white"
        onPress={testFunction}
      />
    </View>
  );
}
const testFunction = () => {
  alert('working');
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#035EB1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    color: '#fff',
    fontSize: 50,
  },
});
