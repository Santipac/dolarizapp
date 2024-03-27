import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useQuotations } from '../hooks/useQuotation';
import { Card } from '../components/card';
import { globalColors } from '../theme';

export const QuotationScreen = () => {
  const insets = useSafeAreaInsets();
  const styles = useStyles(insets);
  const { data, status, error } = useQuotations();
  return (
    <View style={styles.container}>
      {status === 'pending' && (
        <ActivityIndicator animating color={globalColors.greeny} />
      )}
      {status === 'success' && (
        <>
          <Text style={styles.title}>Dolarizapp</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => <Card quote={item} />}
            keyExtractor={item => item.name}
          />
        </>
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
    },
    title: {
      marginVertical: 4,
      textAlign: 'center',
      fontSize: 24,
      fontWeight: '900',
    },
  });
}
