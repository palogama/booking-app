import { StyleSheet } from "react-native";

export const stateWrapperStyles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#f0f0f0",
  },

  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: "#555",
  },

  errorText: {
    marginBottom: 18,
    fontSize: 18,
    fontWeight: "600",
    color: "#fd5353ff",
    textAlign: "center",
  },

  emptyText: {
    fontSize: 18,
    color: "#666",
  },

  primaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 22,
    backgroundColor: "#fd5353ff",
    borderRadius: 12,
    elevation: 2,
  },

  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});