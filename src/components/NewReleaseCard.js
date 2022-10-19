import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Rating } from "react-native-ratings";

export default function NewReleaseCard() {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.imageBackground}
        blurRadius={1.5}
        source={require("./../../assets/images/avengers.jpg")}
      >
        <View style={styles.textContainer}>
          {/* Text Section */}
          <View style={styles.textSection}>
            <Text style={styles.title}>Morbius</Text>
            <Text style={styles.subtitle}>Marvel Studios</Text>
          </View>

          {/* Rating Section */}
          <View style={styles.ratingSection}>
            <Rating imageSize={20} />
            <Text style={styles.ratingText}>From 342 users</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    backgroundColor: "#18181B",
    borderRadius: 25,
    overflow: "hidden",
    marginTop: 10,
  },
  imageBackground: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },
  textContainer: {
    backgroundColor: "rgba(24, 24, 27, 0.5)",
    // opacity: 0.5,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  textSection: { flexGrow: 1 },
  ratingSection: { alignSelf: "flex-end" },
  title: { color: "white", fontSize: 24, fontWeight: "700" },
  subtitle: { color: "white", fontSize: 18, fontWeight: "500" },
  ratingText: {
    fontSize: 13,
    fontWeight: "400",
    color: "#848484",
  },
});
