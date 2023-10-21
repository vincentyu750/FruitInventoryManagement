import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = ({ navigation }) => { // Rename the component to App
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inventory')}>
          <Text style={styles.buttonText}>Inventory</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Home Page</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Finances')}>
          <Text style={styles.buttonText}>Finances</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.appName}>Fruit Inventory Management</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
