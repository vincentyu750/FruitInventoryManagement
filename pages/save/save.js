import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function SaveScreen({ navigation }) {
  const handleRedirect = () => {
    // Redirect to the home page
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#0073e6', marginBottom: 20 }}>
        Finances Saved
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#0073e6',
          padding: 15,
          borderRadius: 5,
        }}
        onPress={handleRedirect}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SaveScreen;
