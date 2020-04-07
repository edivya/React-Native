import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greetings = <Text>Hello to you</Text>;
  return (
    <View>
      <Text style={styles.textStyle}> This is the Components Screen</Text>;
      {greetings}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ComponentsScreen;
