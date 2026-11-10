import { StyleSheet, View } from 'react-native';
import { Host, Button as ComposeButton, TextButton, Icon, Row, Text } from '@expo/ui/jetpack-compose';

import { colors, imageSize } from '@/constants/theme';

type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
};

/**
 * Botón nativo para Android (Jetpack Compose dentro de un Host de Expo UI).
 * Comparte las mismas props que button.tsx (web) y button.ios.tsx (iOS).
 */
export default function Button({ label, theme, onPress }: Props) {
  if (theme === 'primary') {
    return (
      <View style={styles.buttonContainer}>
        <Host matchContents>
          <ComposeButton
            onClick={onPress}
            colors={{ containerColor: colors.accentBright, contentColor: colors.onAccentBright }}
          >
            <Row verticalAlignment="center" horizontalArrangement={{ spacedBy: 8 }}>
              <Icon
                source={require('@expo/material-symbols/image.xml')}
                size={18}
                tint={colors.onAccentBright}
              />
              <Text color={colors.onAccentBright}>{label}</Text>
            </Row>
          </ComposeButton>
        </Host>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Host matchContents>
        <TextButton onClick={onPress} colors={{ contentColor: colors.accent }}>
          <Text color={colors.accent}>{label}</Text>
        </TextButton>
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
