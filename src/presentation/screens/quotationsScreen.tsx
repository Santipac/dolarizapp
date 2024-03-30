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
import { font, globalColors } from '../theme';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navigation/stackNavigator';
import { Dollar } from '~/core/entities/dolar.entity';

export const QuotationScreen = () => {
  const insets = useSafeAreaInsets();
  const styles = useStyles(insets);
  const { data, status, error } = useQuotations();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const handleCardPress = (quote: Dollar) =>
    navigation.navigate('Quote', {
      dollar: quote,
    });

  return (
    <View style={styles.container}>
      {status === 'pending' && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator animating color={globalColors.dark} size={45} />
        </View>
      )}
      {status === 'success' && (
        <>
          <Text style={styles.title}>Dolarizapp</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Pressable onPress={() => handleCardPress(item)}>
                <Card quote={item} withSeeDetailsButton />
              </Pressable>
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
      fontSize: 24,
      fontFamily: font.extrabold,
    },
    loaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}
