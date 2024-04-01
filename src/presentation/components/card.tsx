import theme from '../theme';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Dollar } from '~/core/entities/dolar.entity';
import { Divider } from './divider';
import { formatCurrency, getQuoteLabel } from '../helpers';
import { QUOTE_TYPE } from '~/infrastructure/interfaces/quote';
import { Bookmark } from 'lucide-react-native';
import { useState } from 'react';
import { RootStackParams } from '../navigation/stackNavigator';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface CardProps {
  quote: Dollar;
  formatCurrencyTo?: 'ARS' | 'USD';
  withSeeDetailsButton?: boolean;
  withSaveInHistoryButton?: boolean;
  onHandleConvertionSaved?: (quote: Dollar) => void;
}

export const Card = ({
  quote,
  formatCurrencyTo = 'ARS',
  withSeeDetailsButton = false,
  withSaveInHistoryButton = false,
  onHandleConvertionSaved,
}: CardProps) => {
  const [saved, setSaved] = useState<boolean>();

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const handleCardPress = (quote: Dollar) =>
    navigation.navigate('Quote', {
      dollar: quote,
    });

  const handleConvertionSaved = () => {
    setSaved(!saved);
    onHandleConvertionSaved && onHandleConvertionSaved(quote);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.quoteName}>
            {getQuoteLabel(quote.name as QUOTE_TYPE)}
          </Text>
          {withSaveInHistoryButton && (
            <Bookmark
              onPress={handleConvertionSaved}
              size="30"
              absoluteStrokeWidth
              color={theme.colors.common.black}
              fill={saved ? theme.colors.yellow : theme.colors.common.white}
            />
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
        <Pressable style={styles.button} onPress={() => handleCardPress(quote)}>
          <Text style={styles.buttonLabel}>Ver Más</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    backgroundColor: theme.colors.common.white,
    marginVertical: 8,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: theme.colors.common.black,
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
    fontSize: theme.font.size.extra,
    fontFamily: theme.font.family.extrabold,
    color: theme.colors.common.black,
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
    fontSize: theme.font.size.small,
    fontFamily: theme.font.family.semibold,
    color: theme.colors.common.black,
  },
  quotesPrice: {
    fontSize: theme.font.size.extra,
    fontFamily: theme.font.family.bold,
    color: theme.colors.common.black,
    userSelect: 'text',
  },
  button: {
    flex: 1,
    backgroundColor: theme.colors.orange,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: theme.colors.common.black,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
  },
  buttonLabel: {
    fontSize: theme.font.size.normal,
    fontFamily: theme.font.family.extrabold,
    textTransform: 'uppercase',
  },
});
