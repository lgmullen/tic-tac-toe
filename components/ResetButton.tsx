import { FunctionComponent } from "react";
import { Pressable, Text } from "react-native";

interface ResetButtonProps {
  onPress: () => void;
}

export const ResetButton: FunctionComponent<ResetButtonProps> = ({
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#3cb371" : "#32CD32", // medium/bright green
          paddingVertical: 12,
          paddingHorizontal: 28,
          borderRadius: 0,
          marginTop: 20,
          borderWidth: 4,
          borderColor: "#222",
          shadowColor: "#000",
          shadowOffset: { width: 4, height: 4 },
          shadowOpacity: 1,
          shadowRadius: 0,
          elevation: 6,
          transform: [
            { translateX: pressed ? 2 : 0 },
            { translateY: pressed ? 2 : 0 },
          ],
        },
      ]}
    >
      <Text
        style={{
          color: "#000",
          fontSize: 18,
          fontFamily: "Courier", // looks pixelated on most devices
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        Reset
      </Text>
    </Pressable>
  );
};
