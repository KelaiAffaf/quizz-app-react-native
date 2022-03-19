//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { useState } from "react";
import { useStateValue } from "../StateProvider";
// create a component
const WelcomeScreen = ({ navigation }) => {
  const [{}, dispatch] = useStateValue();
  const [Name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
      ></Image>
      <Text style={styles.text}>Welcome to Quizz App</Text>
      <Text style={styles.text}>Enter your name to proceed :</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => SetTextValue(text)}
        value={Name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          setName("");
          dispatch({
            type: "SET_USER",
            user: Name,
          });
          navigation.navigate("QuestionScreen");
        }}
      >
        <Text style={styles.buttonText}>Start</Text>
      </Pressable>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  input: {
    width: 300,
    height: 40,
    borderBottomWidth: 2,
    margin: 10,
    padding: 10,
    borderBottomColor: "#7673c0",
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: "#7673c0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
  },
});

//make this component available to the app
export default WelcomeScreen;
