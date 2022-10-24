import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ProfileImage from "../components/ProfileImage";

// importing icons
import { MaterialIcons } from "@expo/vector-icons";
import NewReleaseCard from "../components/NewReleaseCard";
import ContinueWatchingCard from "../components/ContinueWatchingCard";
import MovieCard from "../components/MovieCard";

export default function ScrollableDashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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

        {/* Continue Watching */}
        <View>
          <Text style={styles.newReleaseText}>Continue Watching</Text>
          <ContinueWatchingCard />
        </View>

        {/* Movies */}
        <View>
          <Text style={styles.newReleaseText}>Movies</Text>
          <MovieCard
            text="One Punch Man"
            subtext="T.1  Episode 4"
            image={require("./../../assets/images/endgame.jpg")}
          />
          <MovieCard
            image={require("./../../assets/images/blackpanther.jpg")}
            text="Legends of the seeker season 1 episode 100 79 and title"
            subtext="T.1  Episode 4"
          />
        </View>
      </ScrollView>
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
  headerSection: { flexDirection: "row", paddingBottom: 5 },
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
