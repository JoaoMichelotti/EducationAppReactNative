import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./src/screens/Login"; // Certifique-se de que o caminho está correto
import SignIn from "./src/screens/SignIn";
import Home from "./src/screens/Home";
import CourseDetails from "./src/screens/CourseDetails";
import CourseLessons from "./src/screens/CourseLessons";
export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }} // Correção: headerShown (minúsculo)
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registrar" component={SignIn}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={CourseDetails}/>
        <Stack.Screen name="Lessons" component={CourseLessons}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
