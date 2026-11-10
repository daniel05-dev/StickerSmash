import { StyleSheet } from 'react-native';
import {
  GestureDetector,
  usePanGesture,
  useSimultaneousGestures,
  useTapGesture,
} from 'react-native-gesture-handler';
import Animated, { clamp, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Image, type ImageSource } from 'expo-image';

import { imageSize as canvasSize } from '@/constants/theme';

type Props = {
  imageSize: number;
  stickerSource: ImageSource;
};

/**
 * Sticker arrastrable sobre la imagen.
 *
 * - Doble toque: alterna el tamaño entre imageSize y el doble.
 * - Arrastre (pan): mueve el sticker, limitado al lienzo de la imagen
 *   (320x440, tokens del tema) para que nunca se salga.
 * - Ambos gestos se combinan con useSimultaneousGestures.
 */
export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  const scaleImage = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const doubleTap = useTapGesture({
    numberOfTaps: 2,
    onActivate: () => {
      const size = scaleImage.get() === imageSize ? imageSize * 2 : imageSize;
      scaleImage.set(size);
      translateX.set(clamp(translateX.get(), 0, canvasSize.width - size));
      translateY.set(clamp(translateY.get(), 0, canvasSize.height - size));
    },
  });

  const drag = usePanGesture({
    onUpdate: event => {
      translateX.set(clamp(translateX.get() + event.changeX, 0, canvasSize.width - scaleImage.get()));
      translateY.set(clamp(translateY.get() + event.changeY, 0, canvasSize.height - scaleImage.get()));
    },
  });

  const gesture = useSimultaneousGestures(drag, doubleTap);

  const stickerStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.get()),
      height: withSpring(scaleImage.get()),
      transform: [{ translateX: translateX.get() }, { translateY: translateY.get() }],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.sticker, stickerStyle]}>
        <Image source={stickerSource} style={styles.image} />
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  sticker: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
});
