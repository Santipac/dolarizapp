import { Text, View, StyleSheet, FlatList } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalColors } from '../theme';
import { useQuotations } from '../hooks/useQuotation';
import { Card } from '../components/card';

export const QuotationScreen = () => {
  const insets = useSafeAreaInsets();
  const styles = useStyles(insets);
  const { data, status, error } = useQuotations();
  return (
    <View style={styles.container}>
      {status === 'success' && (
        <FlatList
          data={data}
          renderItem={({ item }) => <Card dollar={item} />}
          keyExtractor={item => item.name}
        />
      )}
    </View>
  );
};

function useStyles(inserts: EdgeInsets) {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 12,
      paddingVertical: 4 + (inserts.top + inserts.bottom),
      backgroundColor: globalColors.greeny,
    },
  });
}
