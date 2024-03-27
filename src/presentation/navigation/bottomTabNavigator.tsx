import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HistoryScreen, QuotationScreen } from '~/presentation/screens';
import { Calculator, CalendarClock, DollarSign } from 'lucide-react-native';
import { globalColors } from '../theme';
import { ConvertScreen } from '../screens/convertScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: globalColors.greeny,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Cotizaciones"
        component={QuotationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <DollarSign
              size="24"
              color={focused ? globalColors.black : '#797979'}
              absoluteStrokeWidth
            />
          ),
        }}
      />
      <Tab.Screen
        name="Convertir"
        component={ConvertScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Calculator
              size="24"
              color={focused ? globalColors.black : '#797979'}
              absoluteStrokeWidth
            />
          ),
        }}
      />
      <Tab.Screen
        name="Historial"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CalendarClock
              size="24"
              color={focused ? globalColors.black : '#797979'}
              absoluteStrokeWidth
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
