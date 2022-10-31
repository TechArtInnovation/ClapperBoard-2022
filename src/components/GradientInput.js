import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, TextInput } from "react-native";

export default function GradientInput() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#19A1BE", "#7D4192"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientContainer}
      >
        <View style={styles.contentContainer}>
          <TextInput
            keyboardType="numeric"
            placeholder="Type Here"
            placeholderTextColor="white"
            style={{ fontSize: 16, color: "white", height: "100%" }}
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  gradientContainer: {
    height: 58,
    borderRadius: 25,
    padding: 2,
  },
  contentContainer: {
    height: "100%",
    borderRadius: 23,
    backgroundColor: "#494949",
    padding: 5,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
});
