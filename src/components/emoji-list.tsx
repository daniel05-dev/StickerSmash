import { FlatList, Pressable, StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

import { radius, spacing } from '@/constants/theme';

type Props = {
  onSelect: (image: ImageSource) => void;
  onCloseModal: () => void;
};

const emoji: ImageSource[] = [
  require('@/assets/images/sticker1.png'),
  require('@/assets/images/sticker2.png'),
  require('@/assets/images/sticker3.png'),
  require('@/assets/images/sticker4.png'),
  require('@/assets/images/sticker5.png'),
  require('@/assets/images/sticker6.png'),
];

/** Cuadrícula de stickers-orbe (6 elementos, 3 columnas). */
export default function EmojiList({ onSelect, onCloseModal }: Props) {
  return (
    <FlatList
      data={emoji}
      numColumns={3}
      columnWrapperStyle={styles.row}
      renderItem={({ item }) => (
        <Pressable
          style={({ pressed }) => [styles.cell, pressed && styles.pressed]}
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}>
          <Image source={item} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-around',
    marginBottom: spacing.lg,
  },
  cell: {
    borderRadius: radius.md,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },
});
