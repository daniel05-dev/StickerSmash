import { StyleSheet, Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';

import { colors, radius, spacing, typography } from '@/constants/theme';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Pantalla no encontrada' }} />
      <View style={styles.container}>
        <Text style={styles.emoji}>🫧</Text>
        <Text style={styles.title}>Esta burbuja no existe</Text>
        <Text style={styles.subtitle}>La ruta que buscaste se desvaneció en el agua.</Text>
        <Link href="/" style={styles.link}>
          Volver al inicio
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    padding: spacing.xl,
    gap: spacing.md,
  },
  emoji: {
    fontSize: 48,
    marginBottom: spacing.sm,
  },
  title: {
    fontFamily: typography.display,
    fontSize: typography.sizeXl,
    color: colors.text,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: typography.body,
    fontSize: typography.sizeMd,
    color: colors.textMuted,
    textAlign: 'center',
  },
  link: {
    marginTop: spacing.lg,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: radius.pill,
    backgroundColor: colors.accentBright,
    color: colors.onAccentBright,
    fontFamily: typography.display,
    fontSize: typography.sizeMd,
    overflow: 'hidden',
  },
});
