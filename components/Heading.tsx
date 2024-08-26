// Core imports
import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

// User imports
import {clamp} from './Dimenions';

type HeadingProps = {
  children: string;
  style?: StyleProp<TextStyle>;
};

export default function Heading({
  children,
  style,
}: HeadingProps): React.ReactNode {
  return <Text style={[styles.heading, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  heading: {
    fontSize: clamp(20, 24, 32),
    letterSpacing: 1,
    fontWeight: '400',
    color: '#7b7f98',
  },
});
