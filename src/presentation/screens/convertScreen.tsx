import { View, StyleSheet } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

export const ConvertScreen = () => {
  const insets = useSafeAreaInsets();
  const styles = useStyles(insets);

  return <View style={styles.container}></View>;
};

function useStyles(inserts: EdgeInsets) {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 12,
      paddingVertical: 4 + (inserts.top + inserts.bottom),
    },
  });
}
