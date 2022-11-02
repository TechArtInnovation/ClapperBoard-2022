import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import GradientButton from "../components/GradientButton";
import GradientInput from "../components/GradientInput";
export default function SearchPage() {
  // creating a use state variable
  const [searchValue, setSearchValue] = useState("Zero");
  const [username, setUsername] = useState("Zero");

  var email = "";
  const setEmail = (value) => {
    email = value;
  };

  var hh = "Seven";
  return (
    <View style={styles.container}>
      <Text style={styles.searchText}>Search for a content {searchValue}</Text>

      {/* Text Input */}
      <TextInput onChangeText={(text) => setSearchValue(text)} />

      {/* The component */}
      <GradientInput />
      <GradientButton text="Test" onPress={() => console.log(hh)} />
      <GradientButton
        text={searchValue}
        onPress={() => console.log(searchValue)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 20,
    // backgroundColor: "#18181B",
  },
  searchText: {
    fontSize: 16,
    fontWeight: "400",
  },
});
