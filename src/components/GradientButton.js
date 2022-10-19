import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function GradientButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={["#19A1BE", "#7D4192"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientContainer}
      >
        <View style={[styles.container]}>
          <Text style={{ color: "white", fontWeight: "bold" }}>{text}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    height: 58,
    width: 250,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 55,
    width: 247,
    backgroundColor: "#18181B",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
