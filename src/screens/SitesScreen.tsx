import React, { useState, useMemo, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { mock, ConsultationSite } from "../data/mock";
import NavigationButtons from "../components/NavigationButtons";
import { styles } from "../styles/global";
import StateWrapper from "../components/StateWrapper";

type SitesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Sites"
>;
type SitesScreenRouteProp = RouteProp<RootStackParamList, "Sites">;

export default function SitesScreen() {
  const navigation = useNavigation<SitesScreenNavigationProp>();
  const route = useRoute<SitesScreenRouteProp>();
  const { motive } = route.params;

  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sites, setSites] = useState<ConsultationSite[]>([]);

  // Simulate fetching sites (or any async operation)
  useEffect(() => {
    setLoading(true);
    setError(null);

    try {
      setTimeout(() => {
        setSites(mock.consultationSites);
        setLoading(false);
      }, 500); // simulate network delay
    } catch (e) {
      setError("Failed to load consultation sites");
      setLoading(false);
    }
  }, []);

  // List of cities
  const cities = useMemo(() => {
    const allCities = sites.map((site) => site.city);
    return ["All", ...Array.from(new Set(allCities))];
  }, [sites]);

  // Filter sites based on selected city
  const filteredSites = useMemo(() => {
    if (selectedCity === "All") return sites;
    return sites.filter((site) => site.city === selectedCity);
  }, [selectedCity, sites]);

  return (
    <StateWrapper
      loading={loading}
      error={error}
      data={filteredSites}
      onRetry={() => {}}
    >
      <View style={styles.layout.container}>
        <Text style={styles.text.title}>Choose your practice location</Text>

        {/* City filter dropdown */}
        <TouchableOpacity
          style={styles.modal.dropdownButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.modal.dropdownText}>City: {selectedCity}</Text>
        </TouchableOpacity>

        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modal.modalOverlay}>
            <View style={styles.modal.modalContent}>
              <ScrollView>
                {cities.map((city) => (
                  <TouchableOpacity
                    key={city}
                    style={styles.modal.modalItem}
                    onPress={() => {
                      setSelectedCity(city);
                      setModalVisible(false);
                    }}
                  >
                    <Text style={styles.modal.modalText}>{city}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <TouchableOpacity
                style={styles.modal.modalClose}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modal.modalTextClose}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <FlatList
          data={filteredSites}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.modal.item}
              onPress={() =>
                navigation.navigate("Availabilities", { motive, site: item })
              }
            >
              <Text style={styles.modal.text}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />

        <NavigationButtons />
      </View>
    </StateWrapper>
  );
}
