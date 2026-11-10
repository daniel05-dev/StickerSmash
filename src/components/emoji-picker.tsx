import { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomSheet, RNHostView } from '@expo/ui';

import { colors, spacing, typography } from '@/constants/theme';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

/**
 * Hoja inferior nativa (@expo/ui) con título y contenido React Native
 * dentro de un RNHostView. En Android es un bottom sheet de Material 3,
 * en iOS una hoja de SwiftUI y en web una hoja al final de la página.
 */
export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <BottomSheet
      isPresented={isVisible}
      onDismiss={onClose}
      snapPoints={['half']}
      containerColor={colors.surfaceAlt}>
      <RNHostView>
        <View>
          <Text style={styles.title}>Elige un sticker</Text>
          {children}
        </View>
      </RNHostView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: typography.sizeMd,
    marginBottom: spacing.lg,
  },
});
