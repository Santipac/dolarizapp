import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Dollar } from '~/core/entities/dolar.entity';
import { globalColors } from '../theme';
import { Divider } from './divider';

interface CardProps {
  quote: Dollar;
}

export const Card = ({ quote }: CardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.quoteName}>{quote.name}</Text>
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
      <Pressable style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonLabel}>Ver Más</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    backgroundColor: globalColors.white,
    marginVertical: 8,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: globalColors.black,
    borderRightWidth: 8,
    borderBottomWidth: 8,
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
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
});
