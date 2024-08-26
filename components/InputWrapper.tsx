// Third party imports
import React from 'react';
import {StyleSheet, View} from 'react-native';

// User imports
import {clamp} from './Dimenions';

type InputWrapperProps = {
  children: React.ReactNode;
};

const InputWrapper = ({children}: Readonly<InputWrapperProps>) => {
  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1d1e33',
    paddingVertical: clamp(20, 36, 48),
    paddingHorizontal: clamp(16, 20, 32),
    gap: clamp(8, 12, 20),
    borderRadius: clamp(12, 16, 24),
  },
});

export default InputWrapper;
