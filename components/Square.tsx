import React, { FunctionComponent } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface SquareProps {
  value: string;
  onPress: () => void;
}

export const Square: FunctionComponent<SquareProps> = ({ value, onPress }) => {
  return (
    <View
      style={[
        styles.square,
        value === "X" && styles.xSquare,
        value === "O" && styles.oSquare,
      ]}
    >
      <TouchableOpacity style={styles.square} onPress={onPress}>
        <Text style={[styles.text]}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    // borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  text: { fontSize: 36, color: "green" },
  xSquare: {
    backgroundColor: "#d0ebff" /* light blue */,
    color: "#1c7ed6",
  },

  oSquare: {
    backgroundColor: "#ffe3e3" /* light red */,
    color: "#f03e3e",
  },
});
