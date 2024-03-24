import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { globalColors } from '../theme';

interface ButtonProps {
  label: string;
  onPress: () => void;
  onLongPress?: () => void;
}

export function Button({ label, onPress, onLongPress }: ButtonProps) {
  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColors.greeny,
    height: 54,
    borderWidth: 2.3,
    borderColor: '#000',
    borderRadius: 4,
  },
  label: {
    fontWeight: '800',
    fontSize: 18,
  },
});
