import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

import { colors, glassShadow, imageSize, radius } from '@/constants/theme';

type Props = {
  imgSource: ImageSource;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return <Image source={imageSource} style={styles.image} />;
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
