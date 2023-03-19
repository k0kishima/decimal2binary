import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [targetValue, setTargetValue] = useState<number>(0);
  const [values, setValues] = useState<string[]>(Array(8).fill('0'));

  useEffect(() => {
    setTargetValue(Math.floor(Math.random() * 256));
  }, []);

  const toggleValue = (index: number) => {
    const newValues = [...values];
    newValues[index] = values[index] === '0' ? '1' : '0';
    setValues(newValues);

    const decimalValue = parseInt(newValues.join(''), 2);
    if (decimalValue === targetValue) {
      Alert.alert('Correct', '🎉🎉🎉', [
        { text: 'Again', onPress: () => setTargetValue(Math.floor(Math.random() * 256)) },
      ]);
      setValues(Array(8).fill('0'));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{targetValue}</Text>
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
