import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, StyleSheet } from 'react-native';

const fruitsData = [
  { id: 1, name: 'Apple', image: require('../../assets/pictures/apple.png') },
  { id: 2, name: 'Banana', image: require('../../assets/pictures/banana.png') },
  { id: 3, name: 'Orange', image: require('../../assets/pictures/orange.png') },
  { id: 4, name: 'Grape', image: require('../../assets/pictures/grape.png') },
  { id: 5, name: 'Strawberry', image: require('../../assets/pictures/strawberry.png') },
  { id: 6, name: 'Mango', image: require('../../assets/pictures/mango.png') },
  { id: 7, name: 'Watermelon', image: require('../../assets/pictures/watermelon.png') },
  { id: 8, name: 'Pineapple', image: require('../../assets/pictures/pineapple.png') },
  { id: 9, name: 'Kiwi', image: require('../../assets/pictures/kiwi.png') },
];

const AddScreen = ({ navigation }) => {
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [newFruitPrice, setNewFruitPrice] = useState('');
  const [newFruitQuantity, setNewFruitQuantity] = useState('');

  const addFruit = () => {
    if (!selectedFruit) {
      alert('Please select a fruit.');
      return;
    }

    const newFruit = {
      name: selectedFruit.name,
      price: newFruitPrice,
      quantity: newFruitQuantity,
    };

    navigation.navigate('Inventory', { newFruit });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Fruit</Text>

        {/* Fruit Grid */}
        <FlatList
            data={fruitsData}
            numColumns={3}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
            <TouchableOpacity style={styles.fruitItem} onPress={() => setSelectedFruit(item)}>
                <Image source={item.image} style={styles.fruitImage} resizeMode="cover" />
            </TouchableOpacity>
        )}
      />

      {/* Selected Fruit */}
      <View style={styles.selectedFruitContainer}>
        <Text style={styles.selectedFruitText}>Selected: {selectedFruit ? selectedFruit.name : 'None'}</Text>

        {/* Price and Quantity Text Inputs */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Price"
            value={newFruitPrice}
            onChangeText={(text) => setNewFruitPrice(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Quantity"
            value={newFruitQuantity}
            onChangeText={(text) => setNewFruitQuantity(text)}
          />
        </View>
      </View>

      {/* Add Fruit Button */}
      <TouchableOpacity style={styles.addButton} onPress={addFruit}>
        <Text style={styles.buttonText}>Add Fruit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  selectedFruitContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  selectedFruitText: {
    fontSize: 18,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginRight: 5,
  },
  fruitItem: {
    margin: 5,
  },
  fruitImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#0073e6',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default AddScreen;
