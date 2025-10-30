import React, { useMemo, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import NavigationButtons from "../components/NavigationButtons";
import { styles } from "../styles/global";

type AvailabilitiesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Availabilities"
>;
type AvailabilitiesScreenRouteProp = RouteProp<
  RootStackParamList,
  "Availabilities"
>;

export default function AvailabilitiesScreen() {
  const navigation = useNavigation<AvailabilitiesScreenNavigationProp>();
  const route = useRoute<AvailabilitiesScreenRouteProp>();
  const { motive, site } = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  // Generate 14 days of 30-min slots
  const slots = useMemo(() => {
    const generated: { id: string; datetime: string; available: boolean }[] =
      [];
    const now = new Date();
    now.setHours(8, 0, 0, 0);

    for (let day = 0; day < 14; day++) {
      const date = new Date();
      date.setDate(now.getDate() + day);

      for (let hour = 8; hour < 19; hour++) {
        for (let min = 0; min < 60; min += 30) {
          const slot = new Date(date);
          slot.setHours(hour, min, 0, 0);

          // Around 30% unavailable
          const unavailable = Math.random() < 0.3;

          generated.push({
            id: slot.toISOString(),
            datetime: slot.toISOString(),
            available: !unavailable,
          });
        }
      }
    }
    return generated;
  }, [motive, site]);

  // Group by day
  const grouped = useMemo(() => {
    const map: Record<string, typeof slots> = {};
    for (const s of slots) {
      const day = new Date(s.datetime).toDateString();
      if (!map[day]) map[day] = [];
      map[day].push(s);
    }
    return Object.entries(map);
  }, [slots]);

  return (
    <View style={styles.layout.container}>
      <Text style={styles.text.title}>Choose the time of your appointment</Text>

      <FlatList
        data={grouped}
        keyExtractor={([day]) => day}
        renderItem={({ item: [day, daySlots] }) => (
          <View style={styles.availabilities.dayContainer}>
            <Text style={styles.availabilities.dayTitle}>{day}</Text>
            <View style={styles.availabilities.slotsContainer}>
              {daySlots.map((slot) => (
                <TouchableOpacity
                  key={slot.id}
                  style={[
                    styles.availabilities.slot,
                    !slot.available && styles.availabilities.disabledSlot,
                  ]}
                  disabled={!slot.available}
                  onPress={() =>
                    navigation.navigate("ConfirmBooking", {
                      slot: slot.datetime,
                      motive,
                      site,
                    })
                  }
                >
                  <Text style={styles.availabilities.slotText}>
                    {new Date(slot.datetime).toLocaleTimeString("en-US", {
                      timeZone: "Europe/Brussels",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      />

      <NavigationButtons />
    </View>
  );
}
