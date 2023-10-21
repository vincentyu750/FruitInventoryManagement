import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from './App';
import HomeScreen from './pages/home/HomeScreen'; // Adjust the import path for HomeScreen
import InventoryScreen from './pages/inventory/InventoryScreen'; // Adjust the import path for InventoryScreen
import FinancesScreen from './pages/finances/FinancesScreen'; // Adjust the import path for FinancesScreen

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={App} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Inventory" component={InventoryScreen} />
        <Stack.Screen name="Finances" component={FinancesScreen} />
        {/* Add more screens if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
