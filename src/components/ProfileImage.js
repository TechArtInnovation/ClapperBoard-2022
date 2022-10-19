import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileImage({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={["#19A1BE", "#7D4192"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientContainer}
      >
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={{ height: "100%", width: "100%" }}
            source={require("..//../assets/images/profile.jpg")}
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#18181B",
  },
  gradientContainer: {
    height: 60,
    width: 60,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    height: 55,
    width: 55,
    borderRadius: 55,
    backgroundColor: "white",
    overflow: "hidden",
  },
});
