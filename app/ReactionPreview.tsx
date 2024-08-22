import { useRouter, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";

interface ReactionPreviewProps {
  reactionSrc: string;
}
export default function ReactionPreview() {
  const [isPrivate, setIsPrivate] = useState(true);
  const router = useRouter();
  const reactionSrc = useLocalSearchParams().reactionSrc as string;

  const handlePicture = function () {
    router.push({pathname: "/", params: {re}}

    );
    //navigate to home screen
    //push reaction
  };

  const togglePrivacy = function (switchVal : boolean) {
    setIsPrivate(switchVal);
  };
  return (
    <>
      <Image source={{ uri: reactionSrc }} style={styles.image}></Image>
      <Text>{reactionSrc}</Text>
      <Text>{isPrivate === true ? "Private" : "Public"}</Text>
      <Switch value={isPrivate} onValueChange={togglePrivacy}/>
      <TouchableOpacity onPress={handlePicture}>
        <Text> Yes </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.back()}>
        <Text> No </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 332,
  },
});
