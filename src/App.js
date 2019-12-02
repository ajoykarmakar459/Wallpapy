import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import {HomeScreen} from "./screens/HomeScreen"

class App extends Component {
  render() {
    return (
     <HomeScreen></HomeScreen>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  }
});

export default App;
