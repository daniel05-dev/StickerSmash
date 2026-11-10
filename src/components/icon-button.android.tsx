import type { ImageSourcePropType } from 'react-native';
import { Host, TextButton, Column, Icon, Text } from '@expo/ui/jetpack-compose';
import type { AndroidSymbol, SFSymbol } from 'expo-symbols';

import { colors } from '@/constants/theme';

type Props = {
  icon: {
    android: ImageSourcePropType;
    ios: SFSymbol;
    web: AndroidSymbol;
  };
  label: string;
  onPress: () => void;
};

/** Botón de icono con etiqueta nativo para Android (Jetpack Compose). */
export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Host matchContents>
      <TextButton onClick={onPress} colors={{ contentColor: colors.text }}>
        <Column horizontalAlignment="center" verticalArrangement={{ spacedBy: 12 }}>
          <Icon source={icon.android} size={24} tint={colors.text} />
          <Text color={colors.text}>{label}</Text>
        </Column>
      </TextButton>
    </Host>
  );
}
