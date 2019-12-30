import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  View,
  ActivityIndicator
} from "react-native";

const DATA = [];

let API_KEY = "3457782-221199214ff9e6601376d8cce";

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    this.getphotos();
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        onPress={() => {
          alert("hey");
        }}
        style={{
          flex: 1 / 2, //here you can use flex:1 also
          aspectRatio: 1,
          height: 300,
          padding: 4
        }}
      >
        <Image
          style={{ flex: 1, borderRadius: 4 }}
          resizeMode="cover"
          source={{
            uri: item.webformatURL
          }}
        />
      </TouchableOpacity>
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{ padding: 4 }}
          data={DATA}
          numColumns={2}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </SafeAreaView>
    );
  }

  getphotos() {
    fetch(
      "https://pixabay.com/api/?key=3457782-221199214ff9e6601376d8cce&q=yellow+flowers&image_type=photo"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false
            // dataSource: responseJson.movies
          },
          function() {
            DATA = responseJson.hits;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
});
