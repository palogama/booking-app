import React from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { styles } from "../styles/global";

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
      <View style={styles.state.center}>
        <ActivityIndicator size="large" color="#fd5353ff" />
        <Text style={styles.state.loadingText}>Loading your booking...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.state.center}>
        <Text style={styles.state.errorText}>{error}</Text>

        {onRetry && (
          <TouchableOpacity
            style={styles.state.primaryButton}
            onPress={onRetry}
          >
            <Text style={styles.state.primaryButtonText}>Try Again</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  if (data && data.length === 0) {
    return (
      <View style={styles.state.center}>
        <Text style={styles.state.emptyText}>No results found</Text>
      </View>
    );
  }

  return <>{children}</>;
};

export default StateWrapper;
