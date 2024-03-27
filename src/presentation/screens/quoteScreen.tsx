import { View, StyleSheet, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParams } from '../navigation/stackNavigator';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalColors } from '../theme';
import { format } from 'date-fns';
import { QUOTE_TYPE, getQuoteDescription, getQuoteLabel } from '../helpers';

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
        <View style={[styles.card, { backgroundColor: globalColors.greeny }]}>
          <Text style={styles.cardTitle}>Compra</Text>
          <Text style={styles.cardPrice}>${dollar.priceBuy}</Text>
        </View>
        <View style={[styles.card, { backgroundColor: globalColors.reddy }]}>
          <Text style={styles.cardTitle}>Venta</Text>
          <Text style={styles.cardPrice}>${dollar.priceSell}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.lastUpdateLabel}>Última actualización</Text>
        <Text style={styles.lastUpdate}>
          {format(dollar.updatedAt, 'dd/MM/yyyy HH:mm')}
        </Text>
      </View>
      {description !== null && (
        <View style={styles.infoContainer}>
          <Text style={styles.lastUpdateLabel}>¿Qué representa?</Text>
          <Text style={styles.lastUpdate}>{description}</Text>
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
      fontSize: 24,
      fontWeight: '900',
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
      borderColor: globalColors.black,
      borderRightWidth: 6,
      borderBottomWidth: 6,
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: globalColors.black,
    },
    cardPrice: {
      textAlign: 'center',
      fontSize: 24,
      fontWeight: '800',
      color: globalColors.black,
    },
    lastUpdateLabel: {
      fontSize: 18,
      fontWeight: '600',
      color: '#7c7c7c',
    },
    lastUpdate: {
      fontSize: 18,
      fontWeight: '800',
      color: globalColors.black,
      lineHeight: 22,
      letterSpacing: -0.5,
    },
    infoContainer: {
      gap: 12,
    },
  });
}
