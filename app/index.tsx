/* Home Screen which will display a list of videos that the user can click on and then watch */

//Import statements
import { Text, Button, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";
import Performance from "./components/Performance";
//import Video from "./components/video";
import ReactionPreview from "./ReactionPreview";

// returns two sections, the header and the body, header is fixed in place
export default function Index() {
  const router = useRouter();
  return (
    <>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerText}>Music Discovery</Text>
      </SafeAreaView>

      <SafeAreaView style={styles.body}>
        <ScrollView>
          <Performance
            reactions={[]}
            videoSource="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          />
          <Button
            title="Reactions"
            onPress={() => {
              router.push("./camera");
            }}
          ></Button>

          <Button
            title="ReactionPreview"
            onPress={() => {
              //router.push("./ReactionPreview");
              router.push({
                pathname: "/ReactionPreview",
                params: {
                  reactionSrc:
                    'https://reactnative.dev/img/tiny_logo.png',
                },
              });
            }}
          ></Button>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
    backgroundColor: "#FFFFFF",
    height: 60,
  },

  headerText: {
    fontSize: 25,
    alignSelf: "center",
    textAlignVertical: "top",
  },

  body: {
    backgroundColor: "#8EF743",
    flex: 1,
  },
});
