import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

type Props = {
  loading: boolean;
  error?: string | null;
  data?: any[] | null;
  onRetry?: () => void;
  children: React.ReactNode;
};

const StateWrapper: React.FC<Props> = ({
  loading,
  error,
  data,
  onRetry,
  children,
}) => {
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#fd5353ff" />
        <Text style={styles.loadingText}>Loading your booking...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>

        {onRetry && (
          <TouchableOpacity style={styles.primaryButton} onPress={onRetry}>
            <Text style={styles.primaryButtonText}>Try Again</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  if (data && data.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.emptyText}>No results found</Text>
      </View>
    );
  }

  return <>{children}</>;
};

export default StateWrapper;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#ffffff",
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
