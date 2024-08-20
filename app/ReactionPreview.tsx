import { useRouter } from "expo-router";
import { Image, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  reactionSrc: string;
}

export default function ReactionPreview({ reactionSrc }: Props) {
  const router = useRouter();
  const handlePicture = function () {
    router.push("./index");
    //navigate to home screen
    //push reaction
  }
  return (
    <>
      <Image src={reactionSrc}></Image>
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
    width: 25,
  },
});
