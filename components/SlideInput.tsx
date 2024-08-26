// Core imports
import React from 'react';
import {StyleSheet} from 'react-native';

// Third party imports
import Slider from '@react-native-community/slider';

// User imports
import Heading from './Heading';
import InputWrapper from './InputWrapper';
import Value from './Value';

export type HeightInputProps = {
  title: string;
  value: number;
  roundOffTo: number;
  unit?: string;
  valueHandler: (value: number) => void;
};

const SlideInput = ({
  value,
  title,
  roundOffTo,
  unit,
  valueHandler,
}: HeightInputProps): React.ReactNode => {
  return (
    <InputWrapper>
      <Heading>{title.toUpperCase()}</Heading>
      <Value value={value} unit={unit} roundOffTo={roundOffTo} />
      <Slider
        style={styles.slider}
        minimumValue={10}
        maximumValue={250}
        value={value}
        maximumTrackTintColor="#7b7f98"
        minimumTrackTintColor="#fff"
        thumbTintColor="#eb1555"
        onValueChange={(value: number) => valueHandler(value)}
      />
    </InputWrapper>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: '100%',
  },
});

export default SlideInput;
