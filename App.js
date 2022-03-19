import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./src/screens/welcomeScreen";
import QuizScreen from "./src/screens/quizScreen";
import { StateProvider } from "./src/StateProvider";
import reducer, { initialState } from "./src/reducer";
import CongratScreen from "./src/screens/congratScreen";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="QuestionScreen"
            component={QuizScreen}
            options={{ headerShown: true }}
            initialParams={{ index: 0 }}
          />
          <Stack.Screen
            name="CongratsScreen"
            component={CongratScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
};

export default App;
