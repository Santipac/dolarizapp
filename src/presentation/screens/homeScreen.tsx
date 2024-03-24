import { View, StyleSheet } from 'react-native';
import React from 'react';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '../components/button';
import { globalColors } from '../theme';

export const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const styles = useStyles(insets);

  return (
    <View style={styles.container}>
      <Button onPress={() => {}} label="Calcular" />
    </View>
  );
};

function useStyles(inserts: EdgeInsets) {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginTop: inserts.top,
      marginBottom: inserts.bottom,
      padding: 12,
      backgroundColor: globalColors.grey,
    },
  });
}
