// Core imports
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// User imports
import Heading from './Heading';
import InputWrapper from './InputWrapper';
import Value from './Value';
import {clamp} from './Dimenions';

type OperationButtonProps = {
  sign: string;
  onPress: () => void;
};

const OperationButton = ({
  sign,
  onPress,
}: OperationButtonProps): React.ReactNode => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.operationButton}>{sign}</Text>
    </TouchableOpacity>
  );
};

type IncDecInputProps = {
  title: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};
const IncDecInput = ({
  title,
  value,
  setValue,
}: IncDecInputProps): React.ReactNode => {
  return (
    <InputWrapper>
      <Heading>{title.toUpperCase()}</Heading>
      <Value value={value} roundOffTo={0} />

      <View style={styles.btnWrapper}>
        <OperationButton
          sign="+"
          onPress={() => setValue((prev: number) => prev + 1)}
        />
        <OperationButton
          sign="-"
          onPress={() => setValue((prev: number) => Math.max(prev - 1, 0))}
        />
      </View>
    </InputWrapper>
  );
};

const styles = StyleSheet.create({
  btnWrapper: {
    flex: 1,
    paddingHorizontal: clamp(12, 16, 20),
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  operationButton: {
    fontSize: clamp(32, 48, 56),
    fontWeight: '700',
    color: '#fff',
  },
});

export default IncDecInput;
