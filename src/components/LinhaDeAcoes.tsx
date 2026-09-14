import { Text, TouchableOpacity, View } from 'react-native';

export default function LinhaDeAcoes() {
  return (
    <View className="flex-row justify-between items-center w-full mt-4">
      <View className="w-6 h-6 bg-blue-500 rounded-full" />
      <TouchableOpacity>
        <Text className="text-blue-600 font-bold">Ver mais</Text>
      </TouchableOpacity>
    </View>
  );
}