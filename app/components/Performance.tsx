import { Link } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { PixelRatio, StyleSheet, View, Button } from "react-native";
import { ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";

interface Props {
  //reactions: [Reaction]
  videoSource: string;
}
export const Performance = ({ videoSource }: Props) => {
  return (
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
  );
};

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
