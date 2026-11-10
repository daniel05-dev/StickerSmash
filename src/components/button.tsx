import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SymbolView } from 'expo-symbols';

import {
  buttonGradient,
  colors,
  glassShadow,
  imageSize,
  radius,
  spacing,
  typography,
} from '@/constants/theme';

type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
};

/**
 * Botón para web.
 *
 * El tema "primary" es una pastilla glossy aqua (degradado de cristal) y el
 * tema por defecto es un botón de vidrio esmerilado. Android e iOS usan sus
 * variantes nativas en button.android.tsx y button.ios.tsx con las mismas
 * props.
 */
export default function Button({ label, theme, onPress }: Props) {
  if (theme === 'primary') {
    return (
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [styles.button, styles.primaryButton, pressed && styles.pressed]}
          onPress={onPress}
        >
          <LinearGradient
            colors={[...buttonGradient.colors]}
            locations={[...buttonGradient.locations]}
            style={StyleSheet.absoluteFill}
          />
          <SymbolView
            name={{ ios: 'photo', android: 'image', web: 'image' }}
            size={18}
            tintColor={colors.onAccentBright}
          />
          <Text style={[styles.buttonLabel, styles.primaryLabel]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => [styles.button, styles.secondaryButton, pressed && styles.pressed]}
        onPress={onPress}
      >
        <Text style={[styles.buttonLabel, styles.secondaryLabel]}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: imageSize.width,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 48,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    overflow: 'hidden',
  },
  primaryButton: {
    backgroundColor: colors.accentBright,
  },
  secondaryButton: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    ...glassShadow,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  buttonLabel: {
    fontFamily: typography.display,
    fontSize: typography.sizeMd,
  },
  primaryLabel: {
    color: colors.onAccentBright,
  },
  secondaryLabel: {
    color: colors.accent,
  },
});
