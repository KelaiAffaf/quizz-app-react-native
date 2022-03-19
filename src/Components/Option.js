import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import Questions from "../questions.json";
import { useStateValue } from "../StateProvider";

const Option = ({ text, navigation, qnIndex, optionIdx }) => {
  const [pressed, setPressed] = useState(false);
  let correctAnswerIdx = Questions.questions[qnIndex].correctIndex;

  const [{ score }, dispatch] = useStateValue();
  const updateScore = (Score) => {
    dispatch({
      type: "UPDATE_SCORE",
      score: Score,
    });
  };
  //   const [Optioncolor, setOptioncolor] = useState({});
  //   let handleValidation = () => {
  //     if (optionIdx === correctAnswerIdx) {
  //       console.log("Correct Answer");
  //       setOptioncolor("green");
  //     } else {
  //       console.log("Wrong Answer");
  //       setOptioncolor("red");
  //     }
  //   };

  return (
    <View>
      <Pressable
        style={styles.button}
        style={pressed ? styles.buttonPressed : styles.button}
        onPress={() => {
          setPressed(true);

          optionIdx === correctAnswerIdx ? updateScore(1) : updateScore(0);
          console.log(score);
          if (qnIndex + 1 >= Questions.questions.length) {
            console.log("End of Quiz");
            navigation.navigate("CongratsScreen");
          } else {
            navigation.navigate("QuestionScreen", {
              index: qnIndex + 1,
            });
          }
        }}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 100,
    borderColor: "black",
    backgroundColor: "white",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
  },
  buttonPressed: {
    width: 300,
    height: 100,
    borderColor: "black",
    backgroundColor: "#7673c0",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});
