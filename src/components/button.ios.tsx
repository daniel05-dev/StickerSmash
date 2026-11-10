import { StyleSheet, View } from 'react-native';
import { Host, Button as SwiftUIButton } from '@expo/ui/swift-ui';
import { buttonStyle, controlSize, foregroundStyle, tint } from '@expo/ui/swift-ui/modifiers';

import { colors, imageSize } from '@/constants/theme';

type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
};

/**
 * Botón nativo para iOS (SwiftUI dentro de un Host de Expo UI).
 * Comparte las mismas props que button.tsx (web) y button.android.tsx (Android).
 */
export default function Button({ label, theme, onPress }: Props) {
  if (theme === 'primary') {
    return (
      <View style={styles.buttonContainer}>
        <Host matchContents>
          <SwiftUIButton
            label={label}
            systemImage="photo"
            onPress={onPress}
            modifiers={[
              buttonStyle('borderedProminent'),
              controlSize('large'),
              tint(colors.accentBright),
              foregroundStyle(colors.onAccentBright),
            ]}
          />
        </Host>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Host matchContents>
        <SwiftUIButton
          label={label}
          onPress={onPress}
          modifiers={[buttonStyle('borderless'), controlSize('large'), foregroundStyle(colors.accent)]}
        />
      </Host>
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
});
