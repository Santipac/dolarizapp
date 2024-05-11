import { Pressable, StyleSheet, Text, View } from 'react-native';
import theme from '../theme';
import {
  CONVERTION,
  ConvertionHistory,
} from '~/infrastructure/interfaces/dolarHistory';
import { format } from 'date-fns';
import { MoveRightIcon } from 'lucide-react-native';
import { formatCurrency } from '../helpers';
import { useStore } from '~/core/store/useStore';

interface HistoryCardProps {
  quote: ConvertionHistory;
}

export const HistoryCard = ({ quote }: HistoryCardProps) => {
  const { toggleQuoteIntoHistory } = useStore();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          {quote.type === CONVERTION.ARS_TO_USD ? (
            <View
              style={{ gap: 4, flexDirection: 'row', alignItems: 'center' }}
            >
              <Text style={styles.convertion}>ARS</Text>
              <MoveRightIcon
                size={theme.font.size.large}
                color={theme.colors.common.black}
                absoluteStrokeWidth
              />
              <Text style={styles.convertion}>{quote.exchange}</Text>
            </View>
          ) : (
            <View
              style={{ gap: 4, flexDirection: 'row', alignItems: 'center' }}
            >
              <Text style={styles.convertion}>{quote.exchange}</Text>
              <MoveRightIcon
                size={theme.font.size.large}
                color={theme.colors.common.black}
                absoluteStrokeWidth
              />
              <Text style={styles.convertion}>ARS</Text>
            </View>
          )}
          <Text style={[styles.convertion, { color: theme.colors.orange }]}>
            ${quote.amount}
          </Text>
        </View>
        <View style={styles.quotesContainer}>
          <View style={styles.quotesWrapper}>
            <Text
              style={[styles.quotesLabel, { color: theme.colors.neutral.dark }]}
            >
              Compra
            </Text>
            <Text style={styles.quotesPrice}>
              {formatCurrency(quote.buyPrice, quote.type)}
            </Text>
          </View>
          <View style={styles.quotesWrapper}>
            <Text
              style={[styles.quotesLabel, { color: theme.colors.neutral.dark }]}
            >
              Venta
            </Text>
            <Text style={styles.quotesPrice}>
              {formatCurrency(quote.sellPrice, quote.type)}
            </Text>
          </View>
        </View>
        <View style={styles.dateContainer}>
          <Text
            style={[styles.savedDate, { color: theme.colors.neutral.dark }]}
          >
            Guardado
          </Text>
          <Text
            style={[styles.savedDate, { fontFamily: theme.font.family.bold }]}
          >
            {format(quote.date, 'dd/MM/yyyy HH:mm')}
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => toggleQuoteIntoHistory(quote)}
      >
        <Text style={styles.buttonLabel}>Eliminar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 70,
    backgroundColor: theme.colors.common.white,
    marginVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: theme.colors.common.black,
    borderRightWidth: 6,
    borderBottomWidth: 6,
  },
  wrapper: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  convertion: {
    fontFamily: theme.font.family.extrabold,
    fontSize: theme.font.size.extra,
    textTransform: 'uppercase',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  savedDate: {
    fontFamily: theme.font.family.semibold,
    fontSize: theme.font.size.normal,
    color: theme.colors.common.black,
  },
  quoteName: {
    fontSize: theme.font.size.extra,
    fontFamily: theme.font.family.extrabold,
    color: theme.colors.common.black,
    textTransform: 'uppercase',
  },
  quotesContainer: {
    flexDirection: 'column',
    gap: 6,
    marginVertical: 12,
  },
  quotesWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quotesLabel: {
    fontSize: theme.font.size.normal,
    fontFamily: theme.font.family.semibold,
    color: theme.colors.common.black,
  },
  quotesPrice: {
    fontSize: theme.font.size.extra,
    fontFamily: theme.font.family.bold,
    color: theme.colors.common.black,
  },
  button: {
    flex: 1,
    backgroundColor: theme.colors.reddy,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: theme.colors.common.black,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  buttonLabel: {
    fontSize: theme.font.size.normal,
    fontFamily: theme.font.family.extrabold,
    textTransform: 'uppercase',
  },
});
