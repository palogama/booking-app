import React, { useMemo } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

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

  //Generate 14 days of 30-min slots
  const slots = useMemo(() => {
    const generated: { id: string; datetime: string; available: boolean }[] =
      [];
    const now = new Date();
    now.setHours(8, 0, 0, 0); // start at 08:00

    for (let day = 0; day < 14; day++) {
      const date = new Date();
      date.setDate(now.getDate() + day);

      for (let hour = 8; hour < 19; hour++) {
        for (let min = 0; min < 60; min += 30) {
          const slot = new Date(date);
          slot.setHours(hour, min, 0, 0);

          //Mocking some unavailable slots: around 30% of them are unavailable
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
    <FlatList
      style={styles.container}
      data={grouped}
      keyExtractor={([day]) => day}
      renderItem={({ item: [day, daySlots] }) => (
        <View style={styles.dayContainer}>
          <Text style={styles.dayTitle}>{day}</Text>
          <View style={styles.slotsContainer}>
            {daySlots.map((slot) => (
              <TouchableOpacity
                key={slot.id}
                style={[styles.slot, !slot.available && styles.disabledSlot]}
                disabled={!slot.available}
                onPress={() =>
                  navigation.navigate("ConfirmBooking", {
                    slot: slot.datetime,
                    motive,
                    site,
                  })
                }
              >
                <Text style={styles.slotText}>
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
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  dayContainer: { marginBottom: 20 },
  dayTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  slotsContainer: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  slot: {
    backgroundColor: "#d0f0d0",
    padding: 8,
    borderRadius: 6,
  },
  disabledSlot: {
    backgroundColor: "#f0f0f0",
    opacity: 0.5,
  },
  slotText: { fontSize: 14 },
});
