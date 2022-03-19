import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Option from "../Components/Option";
import Questions from "../questions.json";
import { useState } from "react";
const QuizScreen = ({ route, navigation }) => {
  const { index } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.id}>
        {index + 1}/{Questions.questions.length}
      </Text>
      <Text style={styles.Question}>{Questions.questions[index].question}</Text>
      {Questions.questions[index].answers.map((option, i) => (
        <Option
          key={i}
          text={option}
          navigation={navigation}
          qnIndex={index}
          optionIdx={index}
        />
      ))}
    </SafeAreaView>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    justifyContent: "center",
  },
  question: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 30,
  },

  id: {
    fontSize: 20,
    color: "red",
    marginBottom: 10,
  },
});
