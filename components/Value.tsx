// Core imports
import {Text} from 'react-native';

// Third party imports
import {clamp} from './Dimenions';

type ValueProps = {
  value: number;
  roundOffTo: number;
  unit?: string;
};

export default function Value({value, roundOffTo, unit}: ValueProps) {
  const roundOffMulti: number = Math.pow(10, roundOffTo);
  const roundOffValue: number =
    Math.floor(value * roundOffMulti) / roundOffMulti;

  return (
    <Text
      style={{
        fontSize: clamp(48, 56, 72),
        color: '#dbdaec',
      }}>{`${roundOffValue}${unit ? ` ${unit}` : ''}`}</Text>
  );
}
