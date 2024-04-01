import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HistoryScreen } from '~/presentation/screens';
import { Calculator, CalendarClock, DollarSign } from 'lucide-react-native';
import { ConvertScreen } from '../screens/convertScreen';
import { StackNavigator } from './stackNavigator';
import theme from '../theme';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: theme.colors.greeny,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <DollarSign
              size="24"
              color={focused ? theme.colors.common.black : theme.colors.neutral.main}
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
              color={focused ? theme.colors.common.black : theme.colors.neutral.main}
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
              color={focused ? theme.colors.common.black : theme.colors.neutral.main}
              absoluteStrokeWidth
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
