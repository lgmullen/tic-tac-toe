import { Board } from "@/components/Board";
import { ResetButton } from "@/components/ResetButton";
import { Scoreboard } from "@/components/Scoreboard";
import { TimerBar } from "@/components/TimerBar";
import { useGame } from "@/hooks/useGameLogic";

import { StyleSheet, Text, View } from "react-native";

const MAX_TIME = 5000;

export default function Index() {
  const { squares, turn, score, timer, handlePress, reset, winner } = useGame();

  return (
    <View style={styles.container}>
      <Scoreboard score={score} turn={turn.player} winner={winner} />
      <Text style={styles.timerText}>⏳ {timer}ms</Text>
      <TimerBar timer={timer} maxTime={MAX_TIME} />

      <Board board={squares} onPress={handlePress} />

      <ResetButton onPress={reset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  timerText: {
    fontSize: 24,
    color: "white",
  },
});
