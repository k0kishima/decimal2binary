import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [values, setValues] = useState<string[]>(Array(8).fill('0'));

  const updateValue = (index: number, value: string) => {
    if (value === '0' || value === '1') {
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);
    }
  };

  const decimalValue = parseInt(values.join(''), 2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{decimalValue}</Text>
      <View style={styles.boxContainer}>
        {values.map((value, index) => (
          <TextInput
            key={index}
            style={styles.box}
            value={value}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={(text) => updateValue(index, text)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row',
  },
  box: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
    fontSize: 18,
  },
});
