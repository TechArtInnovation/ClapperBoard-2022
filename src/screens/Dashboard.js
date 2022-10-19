import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  TouchableOpacity,
} from "react-native";
import ProfileImage from "../components/ProfileImage";

// importing icons
import { MaterialIcons } from "@expo/vector-icons";
import NewReleaseCard from "../components/NewReleaseCard";

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        {/* Profile Image */}
        <View style={styles.headerImageSection}>
          <ProfileImage />
        </View>

        {/* Text Section */}
        <View style={styles.headerTextSection}>
          <Text style={styles.headerTitle}>Welcome back</Text>
          <Text style={styles.headerSubTitle}>Maria</Text>
        </View>

        {/* Button Section */}
        <View style={styles.headerBtnSection}>
          <TouchableOpacity>
            <MaterialIcons name="dehaze" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* New Release */}
      <View>
        <Text style={styles.newReleaseText}>New Release</Text>
        <NewReleaseCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#18181B",
    paddingHorizontal: 20,
  },
  headerSection: { flexDirection: "row" },
  headerImageSection: { justifyContent: "center" },
  headerTextSection: {
    flexGrow: 1,
    // flexShrink: 1,
    width: 60,
    justifyContent: "center",
    paddingLeft: 10,
  },
  headerTitle: {
    color: "white",
    fontWeight: "400",
    fontSize: 16,
  },
  headerSubTitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
  headerBtnSection: {
    width: 60,
    justifyContent: "center",
    alignItems: "flex-end",
    // backgroundColor: "cyan",
  },
  newReleaseText: {
    color: "#E8E8E8",
    fontSize: 14,
    fontWeight: "400",
    marginTop: 25,
  },
});
