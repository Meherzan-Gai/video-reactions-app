import EmojiPicker, { EmojiType } from "rn-emoji-keyboard";
import { Image, StyleSheet } from "react-native";
import Performance from "./Performance";
export interface ReactionProps {
  emoji: EmojiType;
  reactionSrc: string;
}
export default function Reaction({
  emoji,
  reactionSrc,
}: ReactionProps) {
  return (
    <>
      <Image src={reactionSrc} style={styles.image}></Image>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 100,
  },
});
