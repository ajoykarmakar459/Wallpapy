import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>Hey</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  }
});
