import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import { Square } from "./Square";

interface BoardProps {
  board: string[];
  onPress: (index: number) => void;
}
export const Board: FunctionComponent<BoardProps> = ({ board, onPress }) => {
  return (
    <View style={styles.board}>
      {board.map((value, index) => (
        <Square key={index} value={value} onPress={() => onPress(index)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 302,
    height: 302,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "grey",
  },
});
