import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Rating } from "react-native-ratings";

export default function ContinueWatchingCard() {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.imageBackground}
        blurRadius={1.5}
        source={require("./../../assets/images/avengers.jpg")}
      ></Image>
      <View style={styles.textContainer}>
        <View style={styles.textSection}>
          <Text style={styles.title}>Grappler Baki</Text>
          <Text style={styles.subtitle}>T.1 Episode 4</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#18181B",
    // borderRadius: 25,
    marginTop: 10,
    width: 200,
    marginRight: 10,
  },
  imageBackground: {
    height: 140,
    width: "100%",
    borderRadius: 25,
    justifyContent: "flex-end",
  },
  textContainer: {
    backgroundColor: "rgba(24, 24, 27, 0.5)",
    // opacity: 0.5,
    flexDirection: "row",
    // paddingHorizontal: 16,
    paddingBottom: 16,
  },
  textSection: { flexGrow: 1, marginLeft: 5 },
  ratingSection: { alignSelf: "flex-end" },
  title: { color: "white", fontSize: 16, fontWeight: "700", marginTop: 3 },
  subtitle: { color: "#868686", fontSize: 13, fontWeight: "500" },
  ratingText: {
    fontSize: 13,
    fontWeight: "400",
    color: "#848484",
  },
});
