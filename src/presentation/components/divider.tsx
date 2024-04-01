import React from 'react';
import theme from '../theme';
import { View } from 'react-native';

interface DividerProps {
  height?: number;
}

export const Divider = ({ height = 30 }: DividerProps) => {
  return (
    <View
      style={{
        alignSelf: 'center',
        height: height,
        width: 1,
        backgroundColor: theme.colors.neutral.light,
      }}
    />
  );
};
