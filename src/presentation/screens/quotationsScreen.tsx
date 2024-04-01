import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useQuotations } from '../hooks/useQuotation';
import { Card } from '../components/card';
import theme from '../theme';

export const QuotationScreen = () => {
  const insets = useSafeAreaInsets();
  const styles = useStyles(insets);
  const { data, status, error } = useQuotations();

  return (
    <View style={styles.container}>
      {status === 'pending' && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator
            animating
            color={theme.colors.common.black}
            size={45}
          />
        </View>
      )}
      {status === 'success' && (
        <>
          <Text style={styles.title}>Cotizaciones</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Card quote={item} withSeeDetailsButton />
            )}
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
      fontSize: theme.font.size.gigant,
      fontFamily: theme.font.family.extrabold,
    },
    loaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}
