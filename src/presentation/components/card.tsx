import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Dollar } from '~/core/entities/dolar.entity';
import { font, globalColors } from '../theme';
import { Divider } from './divider';
import { formatCurrency, getQuoteLabel } from '../helpers';
import { QUOTE_TYPE } from '~/infrastructure/interfaces/quote';

interface CardProps {
  quote: Dollar;
  formatCurrencyTo?: 'ARS' | 'USD';
  withSeeDetailsButton?: boolean;
  withSaveInHistoryButton?: boolean;
}

export const Card = ({
  quote,
  formatCurrencyTo = 'ARS',
  withSeeDetailsButton = false,
  withSaveInHistoryButton = false,
}: CardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.quoteName}>
            {getQuoteLabel(quote.name as QUOTE_TYPE)}
          </Text>
          {withSaveInHistoryButton && (
            <Pressable>
              <Text>save</Text>
            </Pressable>
          )}
        </View>
        <View style={styles.quotesContainer}>
          <View style={styles.quotesWrapper}>
            <Text style={styles.quotesLabel}>Compra</Text>
            <Text style={styles.quotesPrice}>
              {formatCurrency(quote.buyPrice, formatCurrencyTo)}
            </Text>
          </View>
          <Divider />
          <View style={styles.quotesWrapper}>
            <Text style={styles.quotesLabel}>Venta</Text>
            <Text style={styles.quotesPrice}>
              {formatCurrency(quote.sellPrice, formatCurrencyTo)}
            </Text>
          </View>
        </View>
      </View>
      {withSeeDetailsButton && (
        <View style={styles.button}>
          <Text style={styles.buttonLabel}>Ver Más</Text>
        </View>
      )}
    </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quoteName: {
    fontSize: 20,
    fontFamily: font.extrabold,
    color: globalColors.black,
    textTransform: 'uppercase',
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
    fontFamily: font.semibold,
    color: globalColors.black,
  },
  quotesPrice: {
    fontSize: 20,
    fontFamily: font.bold,
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
    fontFamily: font.extrabold,
    textTransform: 'uppercase',
  },
});
