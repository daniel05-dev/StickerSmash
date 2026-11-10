import { Platform, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '@/components/button';
import ImageViewer from '@/components/image-viewer';
import SkyGradient from '@/components/sky-gradient';
import { colors } from '@/constants/theme';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.screen}>
      <SkyGradient />
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer imgSource={PlaceholderImage} />
        </View>
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Elegir foto" onPress={() => alert('Pulsaste un botón.')} />
          <Button label="Usar esta foto" onPress={() => alert('Pulsaste un botón.')} />
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
  },
  imageContainer: {
    flex: 1,
    paddingTop: Platform.select({ web: 96, default: 20 }),
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
