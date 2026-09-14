import { View } from 'react-native';

interface GradeDePublicacoesProps {
  publicacoes: any[];
}

export default function GradeDePublicacoes({ publicacoes }: GradeDePublicacoesProps) {
  const dados = publicacoes?.length > 0 ? publicacoes : Array(10).fill(0);

  return (
    <View className="flex-row flex-wrap justify-between w-full">
      {dados.map((_, index) => (
        <View 
          key={index} 
          className="w-[31%] bg-gray-300 rounded-md mb-3" 
          style={{ height: 110 }} 
        />
      ))}
    </View>
  );
}