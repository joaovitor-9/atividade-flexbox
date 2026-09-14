import { Text, View } from 'react-native';

interface ListaDeChipsProps {
  itens: string[];
}

export default function ListaDeChips({ itens }: ListaDeChipsProps) {
  return (
    <View className="flex-row flex-wrap gap-2 py-2">
      {itens.map((item, index) => (
        <View key={index} className="px-4 py-2 bg-gray-100 rounded-full border border-gray-300">
          <Text className="text-gray-700">{item}</Text>
        </View>
      ))}
    </View>
  );
}