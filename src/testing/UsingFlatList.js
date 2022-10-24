import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import ContinueWatchingCard from "../components/ContinueWatchingCard";
import GradientButton from "../components/GradientButton";
import MovieCard from "../components/MovieCard";

// creating a list
const actions = ["Login", "Sign Up", "Sign In", "jj", "jsj", "dsd"];
const actions2 = ["Login", "Sign Up", "Sign In"];

const actions3 = [
  {
    image: require("./../../assets/images/endgame.jpg"),
    title: "Attack of the titans",
    subtitle: "Season 1",
  },
  {
    image: require("./../../assets/images/blackpanther.jpg"),
    title: "Goku",
    subtitle: "Season 2. Ep. 105",
  },
  {
    image: require("./../../assets/images/endgame.jpg"),
    title: "Man from toronto",
    subtitle: "2022",
  },
];

export default function UsingFlatList() {
  // function to for flat list item
  const flatListItem = (item) => {
    console.log(item.item);
    return (
      <View style={{ marginRight: 5 }}>
        <Text>Hello Boss</Text>
        <Text>{item.item}</Text>
      </View>
    );
  };

  // function to for flat list item
  const flatListItem2 = (item) => {
    console.log(item.item);
    return <GradientButton text={item.item} />;
  };

  // function to for flat list item
  const flatListItem3 = (item) => {
    return (
      <MovieCard
        image={item.item.image}
        text={item.item.title}
        subtext={item.item.subtitle}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text>Holla</Text>

      {/* The Flatlist */}
      {/* <FlatList data={actions} renderItem={flatListItem} horizontal={true} /> */}

      {/* The Flatlist */}
      <FlatList data={actions2} renderItem={flatListItem2} />

      {/* The Flatlist */}
      <FlatList data={actions3} renderItem={flatListItem3} horizontal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 100,
  },
});
