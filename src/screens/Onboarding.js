import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import GradientButton from "../components/GradientButton";

export default function Onboarding({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require(".././../assets/images/onboard_image.png")}
      />
      <Text style={styles.title}>Onboarding</Text>
      <Text style={styles.subtitle}>Watch everything you want for free!</Text>

      {/* <View style={styles.button}>
        <Text style={{ color: "white" }}>Enter Now</Text>
      </View> */}

      {/* Calling the custom button */}
      {/* <CustomButton text="Enter now" onPress={() => console.log("blue")} /> */}
      {/* <CustomButton text="Login" /> */}
      <GradientButton
        text="Enter now"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18181B",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 492,
    width: "100%",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    width: 220,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  button: {
    width: 200,
    backgroundColor: "red",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    marginTop: 20,
  },
});
