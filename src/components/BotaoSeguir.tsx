import { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function BotaoSeguir() {
  const [seguindo, setSeguindo] = useState(false);
  
  return (
    <TouchableOpacity
      onPress={() => setSeguindo(!seguindo)}
      className={`py-3 rounded-lg items-center justify-center w-full ${
        seguindo ? 'bg-transparent border border-blue-500' : 'bg-blue-500'
      }`}
    >
      <Text className={`font-bold text-lg ${seguindo ? 'text-blue-500' : 'text-white'}`}>
        {seguindo ? 'Seguindo' : 'Seguir'}
      </Text>
    </TouchableOpacity>
  );
}