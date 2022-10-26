import { View, StyleSheet, Text, FlatList } from "react-native";

const banks = ["Access Bank", "Zenith", "fidelity", "kuda"];

// flat list render item
const flatListItem = ({ item }) => {
  return <Text>{item}</Text>;
};

// seprator component
const flatListSeprator = () => {
  return <View style={{ width: 50 }} />;
};

export default function UsingFlatList3() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      {/* the flatlist */}
      <FlatList data={banks} renderItem={flatListItem} />
      {/* Horizontal flatlist */}
      <FlatList data={banks} renderItem={flatListItem} horizontal />
      {/* Adding the item seprator component (direct) */}
      <FlatList
        data={banks}
        renderItem={flatListItem}
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 50 }} />}
      />
      {/* Adding the item seprator component (normal humans) */}
      <FlatList
        data={banks}
        renderItem={flatListItem}
        horizontal
        ItemSeparatorComponent={flatListSeprator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: 40 },
});
