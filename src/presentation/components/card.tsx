import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Dollar } from '~/core/entities/dolar.entity';
import { globalColors } from '../theme';
import { Divider } from './divider';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navigation/stackNavigator';
import { QUOTE_TYPE, getQuoteLabel } from '../helpers';

interface CardProps {
  quote: Dollar;
  withButton: boolean;
}

export const Card = ({ quote, withButton }: CardProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Quote', {
          dollar: quote,
        })
      }
    >
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.quoteName}>
            {getQuoteLabel(quote.name as QUOTE_TYPE)}
          </Text>
          <View style={styles.quotesContainer}>
            <View style={styles.quotesWrapper}>
              <Text style={styles.quotesLabel}>Compra</Text>
              <Text style={styles.quotesPrice}>${quote.priceBuy}</Text>
            </View>
            <Divider />
            <View style={styles.quotesWrapper}>
              <Text style={styles.quotesLabel}>Venta</Text>
              <Text style={styles.quotesPrice}>${quote.priceSell}</Text>
            </View>
          </View>
        </View>
        {withButton && (
          <View style={styles.button}>
            <Text style={styles.buttonLabel}>Ver Más</Text>
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    backgroundColor: globalColors.white,
    marginVertical: 8,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: globalColors.black,
    borderRightWidth: 6,
    borderBottomWidth: 6,
  },
  wrapper: {
    paddingTop: 6,
    paddingHorizontal: 16,
  },
  quoteName: {
    fontSize: 20,
    fontWeight: '900',
    color: globalColors.black,
  },
  quotesContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 2,
  },
  quotesWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
    textAlign: 'center',
    marginVertical: 14,
  },
  quotesLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: globalColors.black,
  },
  quotesPrice: {
    fontSize: 20,
    fontWeight: '600',
    color: globalColors.black,
  },
  button: {
    flex: 1,
    backgroundColor: globalColors.orange,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: globalColors.black,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
});
