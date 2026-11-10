import { Pressable, StyleSheet, Text, type ImageSourcePropType } from 'react-native';
import { SymbolView, type AndroidSymbol, type SFSymbol } from 'expo-symbols';

import { colors, spacing, typography } from '@/constants/theme';

type Props = {
  icon: {
    android: ImageSourcePropType;
    ios: SFSymbol;
    web: AndroidSymbol;
  };
  label: string;
  onPress: () => void;
};

/** Botón de icono con etiqueta para web. */
export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]} onPress={onPress}>
      <SymbolView name={{ web: icon.web }} size={24} tintColor={colors.text} />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: colors.text,
    fontFamily: typography.body,
    fontSize: typography.sizeSm,
    marginTop: spacing.md,
  },
  pressed: {
    opacity: 0.7,
  },
});
