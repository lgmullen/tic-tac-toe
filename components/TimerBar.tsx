import React from "react";
import { StyleSheet, View } from "react-native";

interface TimerBarProps {
  timer: number; // current timer in ms
  maxTime: number; // max timer in ms
}

export const TimerBar = ({ timer, maxTime }: TimerBarProps) => {
  const percentage = (timer / maxTime) * 100;
  return (
    <View style={styles.container}>
      <View style={[styles.bar, { width: `${percentage}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 12,
    width: 200,
    backgroundColor: "#333",
    borderRadius: 6,
    overflow: "hidden",
    marginVertical: 16,
  },
  bar: {
    height: "100%",
    backgroundColor: "#3b82f6", // Blue bar
    borderRadius: 6,
  },
});
