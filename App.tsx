import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import AvailabilitiesScreen from "./src/screens/AvailabilitiesScreen";
import ConfirmationScreen from "./src/screens/ConfirmationScreen";
import MotivesScreen from "./src/screens/MotivesScreen";

export type RootStackParamList = {
  Home: undefined;
  Motives: undefined;
  Availabilities: { motive: string };
  Confirmation: { slot: string; motive: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Motives" component={MotivesScreen} />
        <Stack.Screen name="Availabilities" component={AvailabilitiesScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
