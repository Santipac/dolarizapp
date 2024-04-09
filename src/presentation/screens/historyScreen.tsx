import { Text, View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStore } from '~/core/store/useStore';
import theme from '../theme';
import { HistoryCard } from '../components/historyCard';
import { History } from 'lucide-react-native';
import { Button } from '../components';

export const HistoryScreen = () => {
  const { historyQuotations, clearHistory } = useStore();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Historial</Text>
      <View style={{ marginVertical: 12 }}>
        <Button label="Limpiar historial" onPress={clearHistory} />
      </View>
      {historyQuotations.length > 0 ? (
        <FlatList
          data={historyQuotations}
          renderItem={({ item }) => <HistoryCard quote={item} />}
          keyExtractor={item => item.id}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <History size={120} color={theme.colors.neutral.light} />
          <Text style={styles.emptyText}>
            No posees conversiones guardadas aún.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 20,
  },
  title: {
    marginVertical: 4,
    textAlign: 'center',
    fontSize: theme.font.size.gigant,
    fontFamily: theme.font.family.extrabold,
  },
  emptyContainer: {
    flex: 1,
    gap: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  emptyText: {
    fontSize: theme.font.size.normal,
    fontFamily: theme.font.family.semibold,
    color: theme.colors.neutral.main,
    textAlign: 'center',
    userSelect: 'text',
  },
});
