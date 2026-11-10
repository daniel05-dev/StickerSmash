import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, radius, spacing, typography } from '@/constants/theme';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>🫧</Text>
        <Text style={styles.title}>StickerSmash</Text>
        <Text style={styles.subtitle}>Convierte tus fotos en collages con stickers.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: spacing.xl,
    padding: spacing.xxl,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    gap: spacing.md,
  },
  emoji: {
    fontSize: 56,
  },
  title: {
    fontFamily: typography.display,
    fontSize: typography.sizeXl,
    color: colors.text,
  },
  subtitle: {
    fontFamily: typography.body,
    fontSize: typography.sizeMd,
    color: colors.textMuted,
    textAlign: 'center',
  },
});
