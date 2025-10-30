import { StyleSheet } from "react-native";


export const availabilitiesStyles = StyleSheet.create({

    
dayContainer: { marginBottom: 20 },

dayTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 8,},

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
