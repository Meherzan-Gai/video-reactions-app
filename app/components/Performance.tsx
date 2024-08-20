import { Link } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  PixelRatio,
  Text,
  StyleSheet,
  View,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";
import EmojiPicker, { EmojiKeyboard, EmojiType } from "rn-emoji-keyboard";
import Reaction, { ReactionProps } from "./Reaction";

interface PerformanceProps {
  reactions: ReactionProps[];
  videoSource: string;
}
export default function Performance({
  reactions,
  videoSource,
}: PerformanceProps) {
  const [result, setResult] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handlePick = (emoji: EmojiType) => {
    console.log(emoji);
    setResult(emoji.emoji);
    setIsModalOpen((prev) => !prev);
  };
  return (
    <>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: ResizeMode.CONTAIN,
          // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
          source: {
            uri: videoSource,
          },
        }}
      />
      <TouchableOpacity onPress={() => setIsModalOpen(true)}>
        <Text>Open Emoji</Text>
      </TouchableOpacity>
      <EmojiPicker
        onEmojiSelected={handlePick}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
    backgroundColor: "#000000",
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});
