import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";

type CancelBookingModalProps = {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

const CancelBookingModal: React.FC<CancelBookingModalProps> = ({
  visible,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>Cancel booking?</Text>

          <View style={styles.buttons}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#88354A" }]}
              onPress={onCancel}
            >
              <Text style={{ color: "white" }}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#fd5353ff" }]}
              onPress={onConfirm}
            >
              <Text style={{ color: "white" }}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CancelBookingModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, marginVertical: 2 },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  button: {
    flex: 1,
    padding: 12,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: "center",
  },
});
