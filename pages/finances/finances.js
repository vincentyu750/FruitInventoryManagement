import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


function FinancesScreen({ route, navigation }) {
  const [totalNetValue, setTotalNetValue] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    // Retrieve parameters from route.params
    const { totalNetValue, totalQuantity } = route.params || {};

    // Use the retrieved values
    setTotalNetValue(totalNetValue || 0);
    setTotalQuantity(totalQuantity || 0);

    // Add any additional logic you need here

  }, [route.params]);

  useEffect(() => {
    // Calculate totals when the screen focuses
    const unsubscribe = navigation.addListener('focus', calculateTotals);

    // Clean up the listener
    return unsubscribe;
  }, [calculateTotals]);

  const calculateTotals = () => {
    // Logic to calculate totals
    // Update totalNetValue and totalQuantity states
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 16, color: '#333' }}>Total Fruit Value</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#0073e6' }}>
          ${totalNetValue.toFixed(2)}
        </Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 16, color: '#333' }}>Amount of Fruits</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#0073e6' }}>
          {totalQuantity}
        </Text>
      </View>

      {/* Buttons */}
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#0073e6',
            padding: 10,
            borderRadius: 5,
            marginRight: 10,
          }}
          onPress={() => navigation.navigate('Save')}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#0073e6',
            padding: 10,
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default FinancesScreen;
