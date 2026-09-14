import { Text, View } from 'react-native';

export default function IconeComTexto() {
  return (
    <View className="flex-row items-center gap-2">
      <View className="w-6 h-6 bg-gray-400 rounded-full" /> 
      <Text className="text-base text-gray-800">Engenharia de Software - UPE</Text>
    </View>
  );
}