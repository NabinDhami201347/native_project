import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const ReactionsSection: React.FC<{ onLikePress: () => void; reactions: number }> = ({ onLikePress, reactions }) => {
  return (
    <View style={styles.reactionsContainer}>
      <TouchableOpacity onPress={onLikePress} style={styles.actionButton}>
        <Ionicons name="thumbs-up-outline" size={20} color="blue" />
        <Text style={styles.actionButtonText}>Like</Text>
      </TouchableOpacity>
      <Text style={styles.reactionsText}>{reactions} Reactions</Text>
    </View>
  );
};

export default ReactionsSection;

const styles = StyleSheet.create({
  reactionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionButtonText: {
    marginLeft: 4,
    color: "blue",
  },
  reactionsText: {
    marginLeft: 4,
    color: "#888888",
  },
});
