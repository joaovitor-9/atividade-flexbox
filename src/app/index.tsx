import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';

import BotaoSeguir from '../components/BotaoSeguir';
import GradeDePublicacoes from '../components/GradeDePublicacoes';
import IconeComTexto from '../components/IconeComTexto';
import LinhaDeAcoes from '../components/LinhaDeAcoes';
import ListaDeChips from '../components/ListaDeChips';

export default function IndexScreen() {
  const interesses = [
    "Engenharia de Software", "Clube Náutico Capibaribe", "Academia & Musculação"
  ];
  
  const publicacoes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <SafeAreaView className="flex-1 bg-white pt-8">
      <StatusBar barStyle="dark-content" />
      
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* Header */}
        <View className="flex-row items-center gap-4 mb-6">
          <View className="w-24 h-24 bg-gray-800 rounded-full" />
          <View className="flex-col justify-center">
            <Text className="text-2xl font-bold text-gray-900">João Vitor</Text>
            <Text className="text-gray-500 text-base">@joaovitor_amorim99</Text>
          </View>
        </View>
     
        <IconeComTexto />
        <LinhaDeAcoes />

        <View className="flex-row justify-between my-6 px-4">
          <View className="items-center">
            <Text className="font-bold text-xl">10</Text>
            <Text className="text-gray-500">Posts</Text>
          </View>
          <View className="items-center">
            <Text className="font-bold text-xl">233</Text>
            <Text className="text-gray-500">Seguidores</Text>
          </View>
          <View className="items-center">
            <Text className="font-bold text-xl">363</Text>
            <Text className="text-gray-500">Seguindo</Text>
          </View>
        </View>

        <Text className="font-bold text-lg mb-2 text-gray-800">Interesses</Text>
        <ListaDeChips itens={interesses} />

        <Text className="font-bold text-lg mt-6 mb-3 text-gray-800">Publicações</Text>
        <GradeDePublicacoes publicacoes={publicacoes} />
      </ScrollView>

      <View className="p-4 border-t border-gray-200 bg-white">
        <BotaoSeguir />
      </View>
    </SafeAreaView>
  );
}