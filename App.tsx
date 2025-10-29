import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import MotivesScreen from "./src/screens/MotivesScreen";
import SitesScreen from "./src/screens/SitesScreen";
import AvailabilitiesScreen from "./src/screens/AvailabilitiesScreen";
import ConfirmBookingScreen from "./src/screens/ConfirmBookingScreen";
import SuccessScreen from "./src/screens/SuccessScreen";
import { Motive, ConsultationSite } from "./src/data/mock";

export type RootStackParamList = {
  Home: undefined;
  Motives: undefined;
  Sites: { motive: Motive };
  Availabilities: { motive: Motive; site: ConsultationSite };
  ConfirmBooking: { slot: string; motive: Motive; site: ConsultationSite };
  Success: { slot: string; motive: Motive; site: ConsultationSite };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sites" component={SitesScreen} />
        <Stack.Screen name="Motives" component={MotivesScreen} />
        <Stack.Screen name="Availabilities" component={AvailabilitiesScreen} />
        <Stack.Screen name="ConfirmBooking" component={ConfirmBookingScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
