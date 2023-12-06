import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation, route }) {
  const [netTotal, setNetTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const calculateTotals = () => {
      // Check if the route params contain the values
      const { totalNetValue, totalQuantity } = route.params || {};
      
      // Do something with the values if they exist
      if (totalNetValue !== undefined && totalQuantity !== undefined) {
        console.log('Total Net Value:', totalNetValue);
        console.log('Total Quantity:', totalQuantity);
        setNetTotal(totalNetValue);
        setTotalQuantity(totalQuantity);
      }
    };

    // Subscribe to the focus event
    const unsubscribe = navigation.addListener('focus', calculateTotals);

    // Cleanup function to unsubscribe when the component is unmounted
    return unsubscribe;
  }, [navigation, route.params]);

  // Function to update totals and navigate to Finances screen
  const updateTotalsAndNavigate = () => {
    // Send values to FinancesScreen
    navigation.navigate('Finances', { totalNetValue: netTotal, totalQuantity });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require('../../assets/pictures/fruitstand.png')}
        style={{ width: 200, height: 200, marginBottom: 20 }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
        Fruit Inventory Management App
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#0073e6',
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate('Inventory')}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Inventory</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#0073e6',
          padding: 10,
          borderRadius: 5,
        }}
        onPress={updateTotalsAndNavigate}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Finances</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
