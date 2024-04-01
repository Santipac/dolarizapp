import { View, StyleSheet, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParams } from '../navigation/stackNavigator';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { format } from 'date-fns';
import { getQuoteDescription, getQuoteLabel } from '../helpers';
import { QUOTE_TYPE } from '~/infrastructure/interfaces/quote';
import theme from '../theme';

export const QuoteScreen = () => {
  const insets = useSafeAreaInsets();
  const styles = useStyles(insets);
  const { dollar } = useRoute<RouteProp<RootStackParams, 'Quote'>>().params;

  const description = getQuoteDescription(dollar.name as QUOTE_TYPE);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Dólar {getQuoteLabel(dollar.name as QUOTE_TYPE)}
      </Text>
      <View style={styles.cardWrapper}>
        <View style={[styles.card, { backgroundColor: theme.colors.greeny }]}>
          <Text style={styles.cardTitle}>Compra</Text>
          <Text style={styles.cardPrice}>${dollar.buyPrice}</Text>
        </View>
        <View style={[styles.card, { backgroundColor: theme.colors.reddy }]}>
          <Text style={styles.cardTitle}>Venta</Text>
          <Text style={styles.cardPrice}>${dollar.sellPrice}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.lastUpdateLabel}>Última actualización</Text>
        <Text style={styles.description}>
          {format(dollar.updatedAt, 'dd/MM/yyyy hh:mm a')} .
        </Text>
      </View>
      {description !== null && (
        <View style={styles.infoContainer}>
          <Text style={styles.lastUpdateLabel}>¿Qué representa?</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      )}
    </View>
  );
};

function useStyles(inserts: EdgeInsets) {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 12,
      paddingTop: 12 + (inserts.top + inserts.bottom),
      paddingBottom: inserts.bottom,
      gap: 18,
    },
    title: {
      marginVertical: 4,
      textAlign: 'center',
      fontSize: theme.font.size.gigant,
      fontFamily: theme.font.family.extrabold,
    },
    cardWrapper: {
      marginTop: 20,
      flexDirection: 'row',
      gap: 8,
    },
    card: {
      flex: 1,
      paddingVertical: 8,
      paddingHorizontal: 16,
      flexDirection: 'column',
      gap: 4,
      borderRadius: 16,
      borderWidth: 2,
      borderColor: theme.colors.common.black,
      borderRightWidth: 6,
      borderBottomWidth: 6,
    },
    cardTitle: {
      fontSize: theme.font.size.normal,
      fontFamily: theme.font.family.semibold,
      color: theme.colors.common.black,
    },
    cardPrice: {
      textAlign: 'center',
      fontSize: theme.font.size.gigant,
      fontFamily: theme.font.family.bold,
      color: theme.colors.common.black,
      userSelect: 'text',
    },
    lastUpdateLabel: {
      fontSize: theme.font.size.large,
      fontFamily: theme.font.family.semibold,
      color: theme.colors.orange,
    },
    description: {
      fontSize: theme.font.size.large,
      fontFamily: theme.font.family.semibold,
      color: theme.colors.neutral.dark,
      lineHeight: 24,
      letterSpacing: -0.5,
      userSelect: 'text',
    },
    infoContainer: {
      gap: 12,
    },
  });
}
