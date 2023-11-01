import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Button, TextInput } from 'react-native';

function InventoryScreen() {
  const [fruits, setFruits] = useState([]);
  const [newFruitName, setNewFruitName] = useState('');
  const [newFruitPrice, setNewFruitPrice] = useState('');
  const [newFruitQuantity, setNewFruitQuantity] = useState('');
  const [message, setMessage] = useState('');
  const messageTimer = useRef(null);

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        // Import the JSON file using the provided relative path
        const data = require('../../inventory_data/fruits.json');

        // Assuming the JSON structure is { "fruits": [ ... ] }
        setFruits(data.fruits);
      } catch (error) {
        console.error('Error reading JSON data:', error);
      }
    };

    fetchFruits();
  }, []);

  const showMessage = (text) => {
    setMessage(text);
    // Clear the message after 3 seconds
    messageTimer.current = setTimeout(() => {
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

    setFruits([...fruits, newFruit]);
    // Clear the input fields
    setNewFruitName('');
    setNewFruitPrice('');
    setNewFruitQuantity('');
    showMessage('Fruit added successfully.');
  };

  const removeFruit = () => {
    const updatedFruits = [...fruits];
    updatedFruits.pop();
    setFruits(updatedFruits);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text>Inventory Screen</Text>
        {fruits.map((item, index) => (
          <View key={index}>
            <Text>Name: {item.name}</Text>
            <Text>Price: ${item.price.toFixed(2)}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text>-------------------</Text>
          </View>
        ))}
      </ScrollView>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
        <Button title="Add" onPress={addFruit} />
        <Button title="Remove" onPress={removeFruit} />
      </View>

      {/* Text Input Fields for Adding New Fruit */}
      <TextInput
        placeholder="Fruit Name"
        value={newFruitName}
        onChangeText={(text) => setNewFruitName(text)}
      />
      <TextInput
        placeholder="Price"
        value={newFruitPrice}
        onChangeText={(text) => setNewFruitPrice(text)}
      />
      <TextInput
        placeholder="Quantity"
        value={newFruitQuantity}
        onChangeText={(text) => setNewFruitQuantity(text)}
      />

      {/* Display Message */}
      {message ? <Text style={{ color: 'red' }}>{message}</Text> : null}
    </View>
  );
}

export default InventoryScreen;
