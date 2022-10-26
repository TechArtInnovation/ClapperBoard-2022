import { View, StyleSheet, Text } from "react-native";

function ShinyText() {
  return <Text style={{ color: "gold" }}>YEllow</Text>;
}

// using props
const GreenText = ({ title, age }) => {
  return (
    <Text>
      {title} is {age} years old
    </Text>
  );
};

// react children
const Kit = ({ children }) => {
  return <Text>Yo{children}</Text>;
};

export default function UsingFlatList2() {
  return (
    <View style={lookandfeel.container}>
      <Text>Hello</Text>
      <Text>hi</Text>
      <ShinyText text="jj">green</ShinyText>
      <GreenText title="Yola" age={6}>
        joe
      </GreenText>
      <Kit>
        <Text style={{ color: "red" }}>blue</Text>
      </Kit>
    </View>
  );
}

const lookandfeel = StyleSheet.create({
  container: { paddingTop: 40 },
});
