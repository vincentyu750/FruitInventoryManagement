import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../authentication/LoginScreen';
import HomeScreen from '../pages/home/home';
import InventoryScreen from '../pages/inventory/inventory';
import FinancesScreen from '../pages/finances/finances';
import SaveScreen from '../pages/save/save';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={HomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Inventory" component={InventoryScreen} />
        <Stack.Screen name="Finances" component={FinancesScreen} />
        <Stack.Screen name="Save" component={SaveScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
