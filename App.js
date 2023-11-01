import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/home/home';
import InventoryScreen from './pages/inventory/inventory';
import FinancesScreen from './pages/finances/finances';
import App from './MainScreen'; 

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={App} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Inventory" component={InventoryScreen} />
        <Stack.Screen name="Finances" component={FinancesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
