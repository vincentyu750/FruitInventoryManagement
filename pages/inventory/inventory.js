import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function InventoryScreen({ navigation, route }) {
  const [fruits, setFruits] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const storedFruits = await AsyncStorage.getItem('fruits');
        if (storedFruits) {
          const parsedFruits = JSON.parse(storedFruits);
          setFruits(parsedFruits);
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
      } catch (error) {
        console.error('Error saving data:', error);
      }
    };

    saveFruits();
  }, [fruits]);

  useEffect(() => {
    // Check if there is a new fruit from AddScreen
    const newFruit = route.params?.newFruit;

    if (newFruit) {
      // Ensure the new fruit has a 'price' property
      if (!newFruit.price) {
        newFruit.price = 0; // Set a default value or handle it as per your requirements
      }

      setFruits((prevFruits) => [...prevFruits, newFruit]);
    }
  }, [route.params?.newFruit]);

  const showMessage = (text) => {
    setMessage(text);
    // Clear the message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const removeFruit = () => {
    // Check if there are fruits to remove
    if (fruits.length === 0) {
      showMessage('No fruits to remove.');
      return;
    }

    // Create a copy of the fruits array without the last fruit
    const updatedFruits = [...fruits];
    updatedFruits.pop();

    // Update the state with the modified fruits list
    setFruits(updatedFruits);

    // Show success message
    showMessage('Last fruit removed successfully.');
  };

  // Function to navigate to the Add screen
  const navigateToAdd = () => {
    navigation.navigate('Add');
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Inventory</Text>
      <ScrollView style={{ marginBottom: 10 }}>
        <View>
          <View style={{ flexDirection: 'row', borderBottomWidth: 1, padding: 5 }}>
            <Text style={{ flex: 1, fontWeight: 'bold' }}>Fruit</Text>
            <Text style={{ flex: 1, fontWeight: 'bold' }}>Price</Text>
            <Text style={{ flex: 1, fontWeight: 'bold' }}>Quantity</Text>
          </View>
          {fruits.map((item, index) => (
            <View key={index} style={{ flexDirection: 'row', borderBottomWidth: 1, padding: 5 }}>
              <Text style={{ flex: 1 }}>{item.name}</Text>
              <Text style={{ flex: 1 }}>{item.price ? `$${item.price.toFixed(2)}` : 'N/A'}</Text>
              <Text style={{ flex: 1 }}>{item.quantity}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#0073e6',
            padding: 10,
            borderRadius: 5,
            marginRight: 10,
          }}
          onPress={navigateToAdd}
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
