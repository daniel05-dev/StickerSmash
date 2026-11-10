import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SkyGradient from '@/components/sky-gradient';
import { colors, glassShadow, radius, spacing, typography } from '@/constants/theme';

/** Datos de la práctica que se muestran en la pestaña Acerca de. */
const student = {
  name: 'Daniel Del Toro Sánchez',
  email: 'deltorosanchezdaniel@gmail.com',
  github: 'daniel05-dev',
  repo: 'daniel05-dev/StickerSmash',
  practice: 'Tutorial oficial de Expo (8 capítulos)',
};

export default function AboutScreen() {
  return (
    <View style={styles.screen}>
      <SkyGradient />
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.emoji}>🫧</Text>
          <Text style={styles.title}>StickerSmash</Text>
          <Text style={styles.tagline}>
            Convierte tus fotos en collages con stickers en Android, iOS y web.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.section}>Datos del estudiante</Text>
          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Nombre</Text>
              <Text style={styles.rowValue}>{student.name}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Correo</Text>
              <Text style={styles.rowValue}>{student.email}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>GitHub</Text>
              <Text style={styles.rowValue}>{student.github}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Repositorio</Text>
              <Text style={styles.rowValue}>{student.repo}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Práctica</Text>
              <Text style={styles.rowValue}>{student.practice}</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
  },
  card: {
    width: '100%',
    maxWidth: 360,
    padding: spacing.xxl,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    alignItems: 'center',
    gap: spacing.md,
    ...glassShadow,
  },
  emoji: {
    fontSize: 48,
  },
  title: {
    fontFamily: typography.display,
    fontSize: typography.sizeXl,
    color: colors.text,
  },
  tagline: {
    fontFamily: typography.body,
    fontSize: typography.sizeMd,
    color: colors.textMuted,
    textAlign: 'center',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.sm,
  },
  section: {
    fontFamily: typography.display,
    fontSize: typography.sizeSm,
    color: colors.accent,
    textTransform: 'uppercase',
    letterSpacing: 1,
    alignSelf: 'flex-start',
  },
  table: {
    width: '100%',
    gap: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  rowLabel: {
    width: 96,
    fontFamily: typography.body,
    fontSize: typography.sizeSm,
    color: colors.textMuted,
  },
  rowValue: {
    flex: 1,
    fontFamily: typography.body,
    fontSize: typography.sizeSm,
    color: colors.text,
  },
});
