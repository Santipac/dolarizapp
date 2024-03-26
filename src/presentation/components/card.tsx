import { StyleSheet, Text, View } from 'react-native';
import { Dollar } from '~/core/entities/dolar.entity';

interface CardProps {
  dollar: Dollar;
}

export const Card = ({ dollar }: CardProps) => {
  return (
    <View>
      <Text>{dollar.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {},
    wrapper: {}
})