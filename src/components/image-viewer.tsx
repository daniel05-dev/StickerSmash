import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

import { colors, glassShadow, imageSize, radius } from '@/constants/theme';

type Props = {
  imgSource: ImageSource;
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: imageSize.width,
    height: imageSize.height,
    borderRadius: radius.lg,
    borderWidth: 2,
    borderColor: colors.glassStrong,
    ...glassShadow,
  },
});
