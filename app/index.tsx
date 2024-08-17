/* Home Screen which will display a list of videos that the user can click on and then watch */

//Import statements
import { Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { VideoView, useVideoPlayer } from "expo-video";
import Video from "./components/video";

// returns two sections, the header and the body, header is fixed in place
export default function Index() {
  return (
    <>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerText}>Music Discovery</Text>
      </SafeAreaView>

      <SafeAreaView style={styles.body}>
        <Link href="/reactions" asChild>
          <Button title="Reactions"></Button>
        </Link>

        <Video></Video>
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
