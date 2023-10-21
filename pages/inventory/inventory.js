import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';

function InventoryScreen() {
  const [fruits, setFruits] = useState([]);

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

  const addFruit = () => {
    setFruits([...fruits, { name: 'New Fruit', price: 1.99, quantity: 10 }]);
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
    </View>
  );
}

export default InventoryScreen;