import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type buttonProps = {
  onPress: () => void;
  color?: string;
  text: string;
};
export const FullWidthButton: React.FC<buttonProps> = ({
  onPress,
  color = '#EE8433',
  text,
}) => {
  const boxColor = {
    backgroundColor: color,
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          onPress && onPress();
        }}
        style={[styles.pressAbleButton, boxColor]}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  pressAbleButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
