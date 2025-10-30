import React, { useMemo, useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import NavigationButtons from "../components/NavigationButtons";
import { styles } from "../styles/global";
import StateWrapper from "../components/StateWrapper";

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

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [slots, setSlots] = useState<
    {
      id: string;
      datetime: string;
      datetimeLocale: string;
      available: boolean;
    }[]
  >([]);

  // Simulate async loading of slots
  useEffect(() => {
    setLoading(true);
    setError(null);

    try {
      setTimeout(() => {
        const generated: typeof slots = [];
        const now = new Date();
        now.setHours(8, 0, 0, 0);

        for (let day = 0; day < 14; day++) {
          const date = new Date();
          date.setDate(now.getDate() + day);

          for (let hour = 8; hour < 19; hour++) {
            for (let min = 0; min < 60; min += 30) {
              const slot = new Date(date);
              slot.setHours(hour, min, 0, 0);

              const unavailable = Math.random() < 0.3;

              generated.push({
                id: slot.toISOString(),
                datetime: slot.toISOString(),
                datetimeLocale: slot.toLocaleString("en-US", {
                  timeZone: "Europe/Brussels",
                  hour12: false,
                }),
                available: !unavailable,
              });
            }
          }
        }

        setSlots(generated);
        setLoading(false);
      }, 500);
    } catch (e) {
      setError("Failed to load available slots");
      setLoading(false);
    }
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
    <StateWrapper
      loading={loading}
      error={error}
      data={slots}
      onRetry={() => {}}
    >
      <View style={styles.layout.container}>
        <Text style={styles.text.title}>
          Choose the time of your appointment
        </Text>

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
                        slot: slot.datetimeLocale,
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
    </StateWrapper>
  );
}
