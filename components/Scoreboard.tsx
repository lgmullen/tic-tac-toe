import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ScoreboardProps {
  score: {
    p1: number;
    cpu: number;
    ties: number;
  };
  turn: "p1" | "cpu";
  winner: string | null;
}

export const Scoreboard: React.FunctionComponent<ScoreboardProps> = ({
  score,
  turn,
  winner,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.team}>
        <View style={styles.row}>
          <Text style={styles.label}>🧑 PLAYER</Text>
          {!winner && turn === "p1" && (
            <View style={[styles.puck, { backgroundColor: "dodgerblue" }]} />
          )}
        </View>
        <Text style={styles.score}>{score.p1}</Text>
      </View>

      <View style={styles.divider}>
        <Text style={styles.vs}>VS</Text>
        <Text style={styles.tie}>Ties: {score.ties}</Text>
      </View>

      <View style={styles.team}>
        <View style={styles.row}>
          <Text style={styles.label}>🤖 CPU</Text>
          {!winner && turn === "cpu" && (
            <View style={[styles.puck, { backgroundColor: "orange" }]} />
          )}
        </View>
        <Text style={styles.score}>{score.cpu}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#111",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-around",
    width: "90%",
    marginBottom: 20,
  },
  team: {
    alignItems: "center",
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: "#bbb",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  score: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#00ff90",
    fontFamily: "Courier",
  },
  divider: {
    alignItems: "center",
    flex: 1,
  },
  vs: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginBottom: 4,
  },
  tie: {
    fontSize: 12,
    color: "#999",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  puck: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginLeft: 6,
    borderWidth: 1,
    borderColor: "white",
  },
});
