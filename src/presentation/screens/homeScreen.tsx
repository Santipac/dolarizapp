import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const styles = useStyles(insets);

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

function useStyles(inserts: EdgeInsets) {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginTop: inserts.top,
      marginBottom: inserts.bottom,
    },
  });
}
