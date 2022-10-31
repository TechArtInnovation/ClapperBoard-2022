import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Dashboard from "./src/screens/Dashboard";
import Onboarding from "./src/screens/Onboarding";
import ScrollableDashboard from "./src/screens/ScrollableDashboard";
import SearchPage from "./src/screens/SearchPage";
import UsingFlatList from "./src/testing/UsingFlatList";
import UsingFlatList2 from "./src/testing/UsingFlatList2";
import UsingFlatList3 from "./src/testing/UsingFlatList3";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <Onboarding />
    // <Dashboard />
    // <ScrollableDashboard />
    // <UsingFlatList />
    // <UsingFlatList2 />
    // <UsingFlatList3 />
    <SearchPage />
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
