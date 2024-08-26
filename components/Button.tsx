// Core imports
import React from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';

// User imports
import {clamp} from './Dimenions';

export type ButtonProps = {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const Button = ({title, style, onPress}: ButtonProps): React.ReactNode => {
  return (
    <TouchableHighlight onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#eb1555',
    borderRadius: clamp(12, 16, 24),
  },

  buttonText: {
    color: '#fffeff',
    textAlign: 'center',
    fontSize: clamp(20, 28, 32),
    letterSpacing: 1,
  },
});

export default Button;
