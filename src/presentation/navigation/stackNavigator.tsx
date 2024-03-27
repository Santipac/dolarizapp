import { createStackNavigator } from '@react-navigation/stack';
import { QuoteScreen } from '../screens/quoteScreen';
import { QuotationScreen } from '../screens';
import { Dollar } from '~/core/entities/dolar.entity';

export type RootStackParams = {
  Quotations: undefined;
  Quote: { dollar: Dollar };
};

const Stack = createStackNavigator<RootStackParams>();

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Quotations" component={QuotationScreen} />
      <Stack.Screen name="Quote" component={QuoteScreen} />
    </Stack.Navigator>
  );
}
