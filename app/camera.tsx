import {
  CameraView,
  CameraType,
  useCameraPermissions,
  CameraMode,
} from "expo-camera";

import React, { useRef, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ReactionPreview from "./ReactionPreview";
import { EmojiType } from "rn-emoji-keyboard";
import { useRouter } from "expo-router";

export default function Camera({ emoji }: EmojiType) {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [mode, setCameraMode] = useState<CameraMode>("picture");
  const [picture, setPicture] = useState<string>("");
  const cameraRef = useRef<CameraView>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [video, setVideo] = useState<string>("");

  const router = useRouter();
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  async function handleTakePicture() {
    mode === "video" && setCameraMode("picture"); // sets camera mode to picture
    const response = await cameraRef.current?.takePictureAsync();
    setPicture(response!.uri);
    if (response?.uri) {
      router.push({
        pathname: "/ReactionPreview",
        params: { reactionSrc: response.uri },
      });
    }
  }

  async function toggleRecord() {
    if (isRecording) {
      cameraRef.current?.stopRecording();
      setIsRecording(false);
    } else {
      setIsRecording(true);
      const response = await cameraRef.current?.recordAsync();
      setPicture(response!.uri);
    }
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleTakePicture}
            onPressIn={toggleRecord}
            onPressOut={toggleRecord}
          >
            <Text style={styles.text}> Take Picture</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
