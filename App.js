import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Dashboard from "./src/screens/Dashboard";
import Onboarding from "./src/screens/Onboarding";
import ScrollableDashboard from "./src/screens/ScrollableDashboard";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <Onboarding />
    // <Dashboard />
    <ScrollableDashboard />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
