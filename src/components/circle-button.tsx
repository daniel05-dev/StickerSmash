import { Pressable, StyleSheet } from 'react-native';
import { SymbolView } from 'expo-symbols';

import { colors, glassShadow, radius } from '@/constants/theme';

type Props = {
  onPress: () => void;
};

/** Botón circular para web: orbe aqua que abre el selector de stickers. */
export default function CircleButton({ onPress }: Props) {
  return (
    <Pressable style={({ pressed }) => [styles.circleButton, pressed && styles.pressed]} onPress={onPress}>
      <SymbolView name={{ web: 'add' }} size={38} tintColor={colors.onAccent} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderRadius: 42,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.accent,
    ...glassShadow,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
});
