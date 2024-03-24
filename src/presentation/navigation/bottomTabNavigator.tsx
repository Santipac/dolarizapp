import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, HistoryScreen, QuotationScreen } from '~/presentation/screens';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
    }}>
      <Tab.Screen name='Inicio' component={HomeScreen} />
      <Tab.Screen name='Cotizaciones' component={QuotationScreen} />
      <Tab.Screen name='Historial' component={HistoryScreen} />
    </Tab.Navigator>
  );
}
