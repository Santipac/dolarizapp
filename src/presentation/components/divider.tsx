import React from 'react';
import { View } from 'react-native';
import { globalColors } from '../theme';

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
        backgroundColor: globalColors.grey,
      }}
    />
  );
};
