import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [age, setAge] = useState('');
  const [lowRate, setLowRate] = useState(0);
  const [highRate, setHighRate] = useState(0);

  /** Heartrate levels
   * Lower: (220-age) * 0.65, Upper: (220-age) * 0.85
   */

  function calculate(text) {
    setAge(text);
    setLowRate((220 - text) * 0.65);
    setHighRate((220 - text) * 0.85);

  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        value={age}
        onChangeText={text => calculate(text)}>
      </TextInput>
      <Text style={styles.field}>Heartrate limits</Text>
      <Text style={styles.field}>{lowRate.toFixed(0) + ' - ' + highRate.toFixed(0)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 10
  },
  field: {
    marginBottom: 10,
    alignItems: 'center'
  }
});
