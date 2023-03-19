import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [values, setValues] = useState<string[]>(Array(8).fill('0'));

  const toggleValue = (index: number) => {
    const newValues = [...values];
    newValues[index] = values[index] === '0' ? '1' : '0';
    setValues(newValues);
  };

  const decimalValue = parseInt(values.join(''), 2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{decimalValue}</Text>
      <View style={styles.boxContainer}>
        {values.map((value, index) => (
          <TouchableOpacity
            key={index}
            style={styles.box}
            onPress={() => toggleValue(index)}
          >
            <Text style={styles.boxText}>{value}</Text>
          </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 18,
  },
});
