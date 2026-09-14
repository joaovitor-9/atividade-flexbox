import { Text, View } from 'react-native';

export default function RefatoracaoEstilos() {
  return (
    <View>
      <View className="flex-row justify-between p-4">
        <Text>Item 1 da Linha</Text>
        <Text>Item 2 da Linha</Text>
      </View>

      <View className="flex-1 items-center">
        <Text>Conteúdo do Card centralizado</Text>
      </View>
    </View>
  );
}