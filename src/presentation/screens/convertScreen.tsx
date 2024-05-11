import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  FlatList,
} from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import theme from '../theme';
import { useMemo, useState } from 'react';
import { CONVERTION } from '~/infrastructure/interfaces/dolarHistory';
import { useStore } from '~/core/store/useStore';
import { useDebounceValue } from '../hooks/useDebounceValue';
import { getConvertion } from '../helpers';
import { Card } from '../components';
import { Dollar } from '~/core/entities/dolar.entity';
import { DolarMapper } from '~/infrastructure/mappers/dolar.mapper';
import Toast from 'react-native-toast-message';
import toastConfig from '../theme/toastConfig';

export const ConvertScreen = () => {
  const [value, setValue] = useState('');
  const [tab, setTab] = useState<CONVERTION>(CONVERTION.ARS_TO_USD);
  const { quotations } = useStore();
  const debouncedValue = useDebounceValue(value);
  const insets = useSafeAreaInsets();
  const styles = useStyles(insets);
  const { toggleQuoteIntoHistory } = useStore();

  const convertedValues = useMemo(() => {
    if (debouncedValue.length < 1) return [];

    return quotations.map(quote =>
      getConvertion({
        quote,
        convertion: tab,
        value: Number(debouncedValue),
      })
    );
  }, [debouncedValue, tab]);

  const handleOnChange = (text: string) => {
    setValue(text.replace(/[^0-9.]/g, '').trim());
  };

  const handleConvertionSaved = (quote: Dollar) => {
    toggleQuoteIntoHistory(
      DolarMapper.fromDollarToConvertionHistory(
        quote,
        tab,
        Number(debouncedValue)
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor</Text>
      <View style={styles.tabContainer}>
        <Pressable
          style={[
            styles.tab,
            tab === CONVERTION.ARS_TO_USD && {
              backgroundColor: theme.colors.orange,
            },
          ]}
          onPress={() => setTab(CONVERTION.ARS_TO_USD)}
        >
          <Text style={styles.labelTab}>ARS {'>'} USD</Text>
        </Pressable>
        <Pressable
          style={[
            styles.tab,
            tab === CONVERTION.USD_TO_ARS && {
              backgroundColor: theme.colors.orange,
            },
          ]}
          onPress={() => setTab(CONVERTION.USD_TO_ARS)}
        >
          <Text style={styles.labelTab}>USD {'>'} ARS</Text>
        </Pressable>
      </View>

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleOnChange}
        placeholder="Monto"
        keyboardType="numeric"
        maxLength={13}
      />
      <FlatList
        data={convertedValues}
        renderItem={({ item }) => (
          <Card
            quote={item}
            withSaveInHistoryButton
            formatCurrencyTo={tab}
            onHandleConvertionSaved={handleConvertionSaved}
          />
        )}
        keyExtractor={item => item.id}
      />
      <Toast config={toastConfig} />
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
      gap: 8,
    },
    title: {
      marginVertical: 4,
      textAlign: 'center',
      fontSize: theme.font.size.gigant,
      fontFamily: theme.font.family.extrabold,
    },
    input: {
      height: 55,
      borderWidth: 2,
      padding: 10,
      backgroundColor: theme.colors.common.white,
      fontFamily: theme.font.family.bold,
      fontSize: theme.font.size.large,
      paddingLeft: 16,
    },
    tabContainer: {
      marginVertical: 8,
      flexDirection: 'row',
      backgroundColor: theme.colors.common.white,
      borderWidth: 2,
      borderRadius: 4,
    },
    tab: {
      flex: 1,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
    },
    labelTab: {
      fontFamily: theme.font.family.bold,
      fontSize: theme.font.size.large,
      color: theme.colors.common.black,
    },
  });
}
