import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function InventoryScreen({ navigation }) {
  const [fruits, setFruits] = useState([]);
  const [newFruitName, setNewFruitName] = useState('');
  const [newFruitPrice, setNewFruitPrice] = useState('');
  const [newFruitQuantity, setNewFruitQuantity] = useState('');
  const [message, setMessage] = useState('');
  const [netTotal, setNetTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const storedFruits = await AsyncStorage.getItem('fruits');
        if (storedFruits) {
          const parsedFruits = JSON.parse(storedFruits);
          setFruits(parsedFruits);
          calculateTotals(parsedFruits);
        }
      } catch (error) {
        console.error('Error reading stored data:', error);
      }
    };

    fetchFruits();
  }, []);

  useEffect(() => {
    const saveFruits = async () => {
      try {
        await AsyncStorage.setItem('fruits', JSON.stringify(fruits));
        calculateTotals(fruits);
      } catch (error) {
        console.error('Error saving data:', error);
      }
    };

    saveFruits();
  }, [fruits]);


  const calculateTotals = (fruitsArray) => {
    const calculatedNetTotal = fruitsArray.reduce(
      (accumulator, fruit) => accumulator + fruit.quantity * fruit.price,
      0
    );
    const calculatedTotalQuantity = fruitsArray.reduce(
      (accumulator, fruit) => accumulator + fruit.quantity,
      0
    );

    setNetTotal(calculatedNetTotal);
    setTotalQuantity(calculatedTotalQuantity);
  };

  const showMessage = (text) => {
    setMessage(text);
    // Clear the message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const addFruit = () => {
    // Input validation
    if (newFruitName.trim() === '' || isNaN(newFruitPrice) || isNaN(newFruitQuantity)) {
      showMessage('Invalid input. Please provide valid values for name, price, and quantity.');
      return;
    }

    const newFruit = {
      name: newFruitName,
      price: parseFloat(newFruitPrice),
      quantity: parseInt(newFruitQuantity),
    };

    const updatedFruits = [...fruits, newFruit];
    setFruits(updatedFruits);
    setNewFruitName('');
    setNewFruitPrice('');
    setNewFruitQuantity('');
    showMessage('Fruit added successfully.');
  };

  const removeFruit = () => {
    // Check if there are fruits to remove
    if (fruits.length === 0) {
      showMessage('No fruits to remove.');
      return;
    }

  // Function to navigate to the Home screen with params
  const navigateToHome = () => {
    navigation.navigate('Home', { totalNetValue: netTotal, totalQuantity });
  };

    // Create a copy of the fruits array without the last fruit
    const updatedFruits = [...fruits];
    updatedFruits.pop();

    // Calculate totals
    calculateTotals(updatedFruits);

    // Update the state with the modified fruits list
    setFruits(updatedFruits);

    // Show success message
    showMessage('Last fruit removed successfully.');
  };

  // Function to navigate to the Home screen with params
  const navigateToHome = () => {
    navigation.navigate('Home', { totalNetValue: netTotal, totalQuantity });
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Inventory</Text>
      <ScrollView style={{ marginBottom: 10 }}>
        <View>
          <View style={{ flexDirection: 'row', borderBottomWidth: 1, padding: 5 }}>
            <Text style={{ flex: 1, fontWeight: 'bold' }}>Name</Text>
            <Text style={{ flex: 1, fontWeight: 'bold' }}>Price</Text>
            <Text style={{ flex: 1, fontWeight: 'bold' }}>Quantity</Text>
          </View>
          {fruits.map((item, index) => (
            <View key={index} style={{ flexDirection: 'row', borderBottomWidth: 1, padding: 5 }}>
              <Text style={{ flex: 1 }}>{item.name}</Text>
              <Text style={{ flex: 1 }}>${item.price.toFixed(2)}</Text>
              <Text style={{ flex: 1 }}>{item.quantity}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Display Totals */}
      <Text style={{ fontWeight: 'bold' }}>Net Total: ${netTotal.toFixed(2)}</Text>
      <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Total Quantity: {totalQuantity}</Text>

      {/* Text Input Fields for Adding New Fruit */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 5, padding: 5 }}
        placeholder="Fruit Name"
        value={newFruitName}
        onChangeText={(text) => setNewFruitName(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 5, padding: 5 }}
        placeholder="Price"
        value={newFruitPrice}
        onChangeText={(text) => setNewFruitPrice(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        placeholder="Quantity"
        value={newFruitQuantity}
        onChangeText={(text) => setNewFruitQuantity(text)}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#0073e6',
            padding: 10,
            borderRadius: 5,
            marginRight: 10,
          }}
          onPress={addFruit}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#0073e6',
            padding: 10,
            borderRadius: 5,
            marginRight: 10,
          }}
          onPress={navigateToHome}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#0073e6',
            padding: 10,
            borderRadius: 5,
          }}
          onPress={removeFruit}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>Remove</Text>
        </TouchableOpacity>
      </View>

      {/* Display Message */}
      {message ? <Text style={{ color: 'red', marginBottom: 10 }}>{message}</Text> : null}
    </View>
  );
}

export default InventoryScreen;
