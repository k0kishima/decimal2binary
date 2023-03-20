import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Modal,
  ScrollView,
} from 'react-native';

export default function App() {
  const [targetValue, setTargetValue] = useState<number>(0);
  const [values, setValues] = useState<string[]>(Array(8).fill('0'));
  const [modalVisible, setModalVisible] = useState<boolean>(false);

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

  const binaryTable = () => {
    const rows = [];
    for (let i = 0; i < 256; i++) {
      rows.push(
        <View key={i} style={styles.tableRow}>
          <Text style={styles.tableCell}>{i}</Text>
          <Text style={styles.tableCell}>{i.toString(2).padStart(8, '0')}</Text>
        </View>
      );
    }
    return rows;
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
      <TouchableOpacity
        style={styles.eyeIcon}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.eyeIconText}>👀</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>
          <ScrollView contentContainerStyle={styles.table}>
            {binaryTable()}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  boxContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  box: {
    width: 40,
    height: 40,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    fontSize: 24,
  },
  eyeIcon: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  eyeIconText: {
    fontSize: 24,
  },
  modalView: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  closeButtonText: {
    fontSize: 30,
  },
  table: {
    paddingBottom: 20,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
    paddingVertical: 5,
  },
  tableCell: {
    flex: 1,
    fontSize: 16,
  },
});
